import {useState, useMemo} from 'react';
import sortIcon from '../assets/sort-icon.svg'
import arrow from '../assets/chevron.svg'

type Column = {
    key: string;
    label: string;
    className?: string;
    render?: (value: string | number, row?: any) => JSX.Element;
};
type SortConfig = {
    key: string;
    order: 'asc' | 'desc';
};

function DataTable({ columns, dataRows, onRowClick }: {
    columns: Column[];
    dataRows: any[];
    onRowClick?: (row: any) => void;    
}) {
  
    const [sortedBy, setSortedBy] = useState<SortConfig | null>({key: 'id', order: 'asc'});

    const sortedData = useMemo(() => { // cache sorted data
        if(!sortedBy) return dataRows; // if no sort set.

        const { key, order } = sortedBy;
        const sorted = [...dataRows].sort((a, b) => {  

            let aValue = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
            let bValue = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];

            if (aValue === bValue) return 0;

            if (order === 'asc') { // if order is ascending
                return aValue > bValue ? 1 : -1; // if a is greater than b, a comes after (asc)
            } else { // if order is descending
                return aValue < bValue ? 1 : -1; //if a is less than b, a comes after (desc)
            }
        });
        return sorted;
        
    }, [dataRows, sortedBy]);


    const handleClick = (row: any) => {
        if (onRowClick) {
            onRowClick(row);
        }
    };

    const handleSort = (column: Column) => {
        if (sortedData.length === 0) return;
        
        // console.log('Sorting by column:', column.key);

        if (sortedBy && sortedBy.key === column.key) {
            // If sorting same column, toggle sort order
            const direction = sortedBy.order === 'asc' ? 'desc' : 'asc';
            setSortedBy({ key: column.key, order: direction });
        } else {
            // Reset sortBy with new col and ascending order
            setSortedBy({ key: column.key, order: 'asc' });
        }
    };

    return (
        <>
         <p className='text-sm mb-2 text-right'>
         {sortedBy && (<>Sorted by <span className='font-bold'>{sortedBy.key}</span> in <span className='font-bold'>{sortedBy.order}</span> order</>)}</p>
            
            <div className='overflow-hidden rounded-xl '>
                <table className='text-left table-auto w-full max-w-3xl border-collapse border-none'>
                    <thead>
                        <tr className="text-white bg-linear-to-r from-[#555FB3] to-[#461770] border-none text-sm lg:text-base">
                            {columns.map((column: Column, index: number) => (
                                <th 
                                    key={column.key || index}
                                    scope="col" 
                                    className={`p-2 md:py-4 lg:p-4 ${column.className ?? ''} ${sortedData.length > 0 && 'cursor-pointer'}`}
                                    onClick={() => handleSort(column)}
                                    aria-sort={
                                        sortedBy?.key === column.key
                                        ? sortedBy.order === 'asc'
                                            ? 'ascending'
                                            : 'descending'
                                        : 'none'
                                    }
                                >
                                    {column.label} 
                                    {sortedData.length > 0 && (
                                        <img src={sortIcon} alt={`Sort by ${column.label}`} className='hidden lg:inline-block ml-2 w-[10px] h-auto' />
                                    )}
                                </th>
                            ))}
                            {onRowClick && <th scope="col" className='p-2 md:py-4 lg:p-4'></th>}
                        </tr>
                    </thead>

                    <tbody>
                        {sortedData.length === 0 && (
                            <tr>
                                <td colSpan={columns.length + (onRowClick ? 1 : 0)} className='bg-gray-100 p-10 h-40 text-center text-gray-600 italic'>
                                    No invoices found
                                </td>
                            </tr>
                        )}
                        
                        {sortedData.map((row: any, index: number) => (
                            <tr key={row.id} className={`${index % 2 ? 'bg-gray-100' : 'bg-white'} border-b border-gray-300 ${onRowClick && 'cursor-pointer group hover:bg-yellow-100 transition-all duration-300'}`}
                                onClick={() => handleClick(row)}
                            >
                                {columns.map((column: Column, colIndex: number) => {
                                    const cellValue = row[column.key];
                                    const cellContent = column.render ? column.render(cellValue, row) : cellValue;

                                    return (
                                        <td key={colIndex} className={`p-2 lg:p-4 ${column.className ?? ''}`}>
                                            {cellContent}
                                        </td>
                                    );
                                })}

                                {onRowClick && (
                                    <td className='p-2 lg:p-4'>
                                        <img src={arrow} alt='Arrow' className='group-hover:translate-x-1 w-[10px] h-auto transition-all duration-300' />
                                    </td>
                                )}
                                
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center mt-10'>
                <div className='flex items-center mb-4 sm:mb-0'>
                    <span className='text-sm text-gray-500'>Showing 1 to 30 of {sortedData.length} entries</span>
                </div>
                <div className='flex items-center'>
                    <button disabled={true} className='bg-gray-300 text-white py-2 px-4 rounded-lg mr-2 cursor-not-allowed'>Previous</button>
                    <button disabled={true} className='bg-gray-300 text-white py-2 px-4 rounded-lg cursor-not-allowed'>Next</button>
                </div>
            </div>
        </>
    );

}
export default DataTable;