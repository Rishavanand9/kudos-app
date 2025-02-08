import { useState, useCallback } from "react";
import debounce from "../utils/customdebounce";
import './../pages/Dashboard/styles.css'
import axios from "axios";
import { API_HEADERS, SEARCH_USER_URL } from "../constants";

const useDebounce = (callback, delay) => {
    const debouncedFn = useCallback(debounce(callback, delay), [callback, delay]);
    return debouncedFn;
};

const SearchInput = ({ onSelect }) => {
    const [query, setQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState([]);

    const debouncedSearch = useDebounce((searchTerm) => {
        console.log("Searching for:", searchTerm);
        setShowResults(true);

        axios.get(`${SEARCH_USER_URL}?name=${searchTerm}`, {
            headers: API_HEADERS
        })
            .then((response) => {
                setResults(response.data.slice(0, 3));
            })
            .catch((err) => {
                console.log(err);
            });
    }, 300);

    const handleChange = (event) => {
        setQuery(event.target.value);
        debouncedSearch(event.target.value);
    };

    const onSelection = (item) => {
        onSelect(item);
        setQuery(item.username);
        setResults([])
        setShowResults(false)
    }
 
    const SearchResults = ({ results, onSelect }) => (
        <ul className="results-list">
            {results.length > 0 ? (
                results.map((item) => (
                    <li key={item.id} onClick={() => onSelection(item)}>
                        {item.username}
                    </li>
                ))
            ) : (
                <li>No results found</li>
            )}
        </ul>
    );

    return (
        <div>
            <input
                type="text"
                className="search-bar"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
                aria-label="Search users"
            />
            {showResults ? <SearchResults results={results} onSelect={onSelect} /> : null}
        </div>
    );
}

export default SearchInput