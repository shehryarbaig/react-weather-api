import {useState} from 'react';
import "./SearchBar.style.css"


const SearchBar = props => {
    const {onClick, onChange, placeholder="Search"} = props;
    const [searchQuery,setSearchQuery] = useState("");

    const handleOnChange = (e) =>
    {
        onChange(e);
        setSearchQuery(e.target.value);
    }


    return (
        <div className="searchBarContainer">
            <input className="searchInput" onChange={handleOnChange} placeholder={placeholder}/>
            <button className="searchButton" onClick={()=>onClick(searchQuery)}>Search</button>
            
        </div>
    );
};



export default SearchBar;