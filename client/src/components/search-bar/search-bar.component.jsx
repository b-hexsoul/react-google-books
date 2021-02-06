import "./search-bar.styles.scss";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-container p-1 my-1">
      <h2>Book Search</h2>
      <form onSubmit={(e) => handleSearch(e)}>
        <div className="search-bar">
          <input type="search" name="search" id="search" />
          <label htmlFor="search">Search</label>
        </div>
        <button type="submit" >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
