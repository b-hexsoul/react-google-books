import BookList from "../../components/book-list/book-list.component";
import SearchBar from "../../components/search-bar/search-bar.component";

import { useState } from "react";

const Search = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    let title = e.target.search.value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=title:${title}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.items);
        setBooks(data.items);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default Search;
