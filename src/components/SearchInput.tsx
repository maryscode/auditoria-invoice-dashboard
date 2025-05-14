import { useState, useEffect } from "react"

function SearchInput({onSearch, placeholder, debounce = 0}) {
    const [searchTerm, setSearchTerm] = useState('')
    

    useEffect(() => {
        if (debounce > 0) {
            // debounce the search term
            const debounceTimeout = setTimeout(() => {
                onSearch(searchTerm)
            }
            , debounce)
            return () => clearTimeout(debounceTimeout)  // cleanup
        } else {
            onSearch(searchTerm)    
        }
    }, [searchTerm])

    return(
        <div className='relative mt-4 border border-gray-400 rounded-xl '>
            
            <input
                type='text'
                value={searchTerm}
                placeholder={placeholder}
                className={`p-2 pe-10 text-sm  w-[250px]`}
                aria-label='Search invoices'
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onSearch(searchTerm)
                    }
                }}
            />
            
            <svg
            height="24"
            width="24"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 w-[24px] h-[24px] text-gray-500"
            >
            <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
            </svg>
      </div>
    )
}
export default SearchInput