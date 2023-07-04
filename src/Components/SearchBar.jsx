
import { useState } from "react";

function SearchBar({ setCity }) {

    const [search, setSearch] = useState([])

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setCity(search)
            event.currentTarget.value = ""
        }
    };


    return (
        <>
            <input
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                className="search-bar" type="search" placeholder="Search Cities..." />
        </>
    )
}

export default SearchBar