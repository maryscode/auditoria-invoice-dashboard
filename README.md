# Senior UI Engineer Take-Home Challenge
This project is a React + TypeScript + Vite implementation of a small reusable UI component library for a fictional internal admin tool. It includes a sortable, searchable invoice table and supporting UI components.

## Quickstart

1. Clone the repo, install dependencies, and run the dev server:
   ```bash
   npm install
   npm run dev
   ```

2. Open your browser to `http://localhost:5173/`
-------------
## Component Details

### <DataTable />
**Features**
- Column-based sorting: toggles ascending and descending
- Optional row click handler
- Responsive layout. In this demo, Invoice, Balance, and Status columns are visible on mobile. This behavior is controlled via Tailwind utility classes provided in the `className` key of each `column` object

**Props**
- **columns:** Defines the headers (<thead><th>) of the table with optional render functions (e.g. StatusBadge)
- **dataRows:** Array of objects that represent each row of data
- **onRowClick:**  (optional) Adds a clickable indicator (arrow) to each row and enables row click behavior when this function is provided
- **loading:**  (optional) Boolean that displays loading state. Defaults to false

**Example Usage**
```
<DataTable
      columns={columns}
      dataRows={data}
      onRowClick={(row) => console.log(row)}
      loading={false}
/>
```

**Example Columns Data**
```
// Example with column hidden in screens < sm

const columns = [
    {
      key: 'date',
      label: 'Due Date',
      className: 'hidden sm:table-cell'
    },
]
```


### <StatusBadge />
**Features**
Shows color-coded status tags.

**Props**
- **status:** Accepts "complete", "error", "pending". Any others outside of these labels will display as "Unknown". Prop value is sanitized with lowercase and trimmed.

**Example Usage**
```
<StatusBadge status="complete" /> 
```


### <SearchInput />
**Features**
Debounced search input field with onChange and optional Enter key behavior.

**Props**
- **onSearch:** Callback triggered when user types or presses Enter
- **placeholder:** (optional) Placeholder text in input field
- **debounce:** (optional) Debounce delay in ms before calling onSearch fn.

**Example Usage**
```
<SearchInput debounce={500} placeholder="Search invoices" onSearch={(e) => handleSearch(e)}/> 
```
-------------

## Data Structure
**Invoice Data File:** /src/data/invoices.ts
```
// Example invoice data 
 [
     {
        id: 'INV-001',
        vendor: 'Jane Smith',
        date: '2025-05-02',
        balance: 2000,
        status: 'Complete',
      },
]
```
##  Tech Stack
- **Vite**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts (Open Sans)**

## Design Decisions

- **DataTable** is fully reusable, with configurable columns and optional custom cell rendering via a `render` function in the column config.
- **Sorting** is handled using `useMemo`, with ascending/descending toggle state stored in `useState`. Sorting is stable and works across all data types.
- **Search** is implemented in the parent component to keep `DataTable` stateless and reusable. The `SearchInput` component supports optional debouncing and Enter key execution.
- **StatusBadge** displays clear visual feedback for invoice status using color-coded tags.
- Layout and components are responsive and styled with Tailwind CSS.
- Pagination was not implemented to stay within the 4-hour time scope but is prepared for as a future enhancement.

## Future Enhancements
- Pagination
- Custom date formatting
- Character limit for display
- Rotating sortby icon
- Custom animated loading icon