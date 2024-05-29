
export default function SearchBar({location, handleLocation}) {
    

    return(
        <div className="search-bar">
        <input 
        placeholder="Search City or Zipcode"
        />
        <button input='text' value={location} onChange={handleLocation} >Search</button>
        </div>
    )
}