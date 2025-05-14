import { useState, useMemo } from 'react'
import Header from './components/Header'
import DataTable from './components/DataTable'
import SearchInput from './components/SearchInput'
import { emptyInvoices, invoices } from './data/invoices'
import StatusBadge from './components/StatusBadge';


function App() {
    const [searchTerm, setSearchTerm] = useState('');


  // Define the data for the DataTable
  
  //const invoiceData = emptyInvoices; // Test with emtpy data
  const invoiceData = invoices;

  const filteredInvoices = useMemo(() => {
    if (!searchTerm) return invoiceData;
  
    return invoiceData.filter((invoice) =>
      invoice.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [invoiceData, searchTerm]);


  // Columns Labels for the DataTable
  const columns : {
    key: string;
    label: string;
    className?: string;
    render?: (value: any) => JSX.Element;
  }[] = [
    {
      key: 'id',
      label: 'Invoice #',
      className: 'p-2 md:py-4 lg:p-4'
    },
    {
      key: 'vendor',
      label: 'Vendor',
      className: 'hidden sm:table-cell'
    },
    {
      key: 'date',
      label: 'Due Date',
      className: 'hidden sm:table-cell'
    },
    {
      key: 'balance',
      label: 'Balance',
      render: (value) => <span className="font-bold">${value}</span>,
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => <StatusBadge status={value.trim().toLowerCase()} />, 
    }
  ];

  const handleSearch = (searchInput: string) => {
    // console.log('Searching for:', searchInput);
    setSearchTerm(searchInput.trim().toLowerCase());
  };
  
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center mx-8 pb-8 lg:px-[50px] lg:mx-[96px] '>
        <div className='w-full max-w-3xl'>
          <div className='mb-4 sm:flex sm:items-end sm:justify-between sm:mb-6'>
            <div>
              <h1 className='text-3xl font-bold mb-2 text-left'>INVOICES</h1>
              {searchTerm ? <p className='text-md text-gray-500 text-left'>Showing results for: {searchTerm}</p> : <p className='text-md text-gray-500 text-left'>There are <strong>{invoiceData.length}</strong> invoices total.</p>}
            </div>
            <div>
              <SearchInput debounce={500} placeholder="Search ID, vendor, or status" onSearch={(e) => handleSearch(e)}/>
            </div>
            
            
          </div>
          
          <DataTable 
            columns={columns} 
            dataRows={filteredInvoices}
            onRowClick={(row) => console.log('optional onClick')}
          />


          
        </div>
    </div>
    </>
  )
}

export default App
