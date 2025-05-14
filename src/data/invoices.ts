export const emptyInvoices : {}[] = [];

export const invoices : {
    id: string
    vendor: string
    date: string
    balance: number
    status: string
}[]  = [
{
    id: 'INV-002',
    vendor: 'John Doe',
    date: '2025-05-01',
    balance: 1000,
    status: 'Pending',
    },
  {
    id: 'INV-001',
    vendor: 'Jane Smith',
    date: '2025-05-02',
    balance: 2000,
    status: 'complete',
  },
  {
    id: 'INV-003',
    vendor: 'John Smith',
    date: '2025-05-03',
    balance: 200,
    status: 'error',
  },
  {
    id: 'INV-004',
    vendor: 'Lorem Ipsum',
    date: '2025-05-05',
    balance: 5000,
    status: 'complete',
  },  
  {
    id: 'INV-005',
    vendor: 'Acme Corp',
    date: '2025-05-03',
    balance: 700,
    status: '',
  },  
 
  { id: 'INV-006', vendor: 'Delta Inc.', date: '2025-05-04', balance: 1500, status: 'Pending' },
  { id: 'INV-007', vendor: 'Omega Ltd.', date: '2025-05-06', balance: 2500, status: 'Complete' },
  { id: 'INV-008', vendor: 'Nova Solutions', date: '2025-05-07', balance: 1800, status: 'Complete' },
  { id: 'INV-009', vendor: 'Pixel Works', date: '2025-05-08', balance: 300, status: 'Error' },
  { id: 'INV-010', vendor: 'Zenith Tech', date: '2025-05-09', balance: 950, status: 'Pending' },

  { id: 'INV-011', vendor: 'Alpha Group', date: '2025-05-10', balance: 1100, status: 'Pending' },
  { id: 'INV-012', vendor: 'Bravo Co.', date: '2025-05-11', balance: 870, status: 'Complete' },
  { id: 'INV-013', vendor: 'Gamma Enterprises', date: '2025-05-12', balance: 640, status: 'Complete' },
  { id: 'INV-014', vendor: 'Sigma Logistics', date: '2025-05-13', balance: 900, status: 'Error' },
  { id: 'INV-015', vendor: 'Beta Labs', date: '2025-05-14', balance: 2200, status: 'Pending' },

  { id: 'INV-016', vendor: 'Vertex Inc.', date: '2025-05-15', balance: 3100, status: 'Pending' },
  { id: 'INV-017', vendor: 'Nimbus LLC', date: '2025-05-16', balance: 450, status: 'Error' },
  { id: 'INV-018', vendor: 'Apex Partners', date: '2025-05-17', balance: 1000, status: 'Complete' },
  { id: 'INV-019', vendor: 'NextGen Systems', date: '2025-05-18', balance: 380, status: 'Pending' },
  { id: 'INV-020', vendor: 'Echo Tech', date: '2025-05-19', balance: 720, status: 'Complete' },

  { id: 'INV-021', vendor: 'Solaris Media', date: '2025-05-20', balance: 150, status: 'Error' },
  { id: 'INV-022', vendor: 'Titan Motors', date: '2025-05-21', balance: 850, status: 'Pending' },
  { id: 'INV-023', vendor: 'Quasar Studios', date: '2025-05-22', balance: 950, status: 'Complete' },
  { id: 'INV-024', vendor: 'Orbit Apps', date: '2025-05-23', balance: 560, status: 'Pending' },
  { id: 'INV-025', vendor: 'Lumina Foods', date: '2025-05-24', balance: 1230, status: 'Error' },

  { id: 'INV-026', vendor: 'Crux AI', date: '2025-05-25', balance: 1420, status: 'Complete' },
  { id: 'INV-027', vendor: 'Glide Labs', date: '2025-05-26', balance: 630, status: 'Pending' },
  { id: 'INV-028', vendor: 'Matter Studio', date: '2025-05-27', balance: 770, status: 'Complete' },
  { id: 'INV-029', vendor: 'Fluent Flow', date: '2025-05-28', balance: 910, status: 'Pending' },
  { id: 'INV-030', vendor: 'Neon Grove', date: '2025-05-29', balance: 1500, status: 'Error' },
];