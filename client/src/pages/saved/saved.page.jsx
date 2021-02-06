import BookList from "../../components/book-list/book-list.component";
import { useState } from "react";

const Saved = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  return (
    <div>
      <BookList books={savedBooks} />
    </div>
  );
};

export default Saved;
