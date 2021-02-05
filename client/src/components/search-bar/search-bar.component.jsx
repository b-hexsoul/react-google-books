import "./search-bar.styles.scss";

const SearchBar = () => {
  return (
    <div className="search-container">
      <h2>Book Search</h2>
      <form>
        <div className="search-bar">
          <input type="search" name="search" id="search" />
          <label htmlFor="search">Search</label>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
