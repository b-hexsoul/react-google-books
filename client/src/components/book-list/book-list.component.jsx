import { useLocation } from "react-router-dom";
import BookCard from "../book-card/book-card.component";
import "./book-list.styles.scss";

const BookList = ({ books }) => {
  let location = useLocation();

  return (
    <div className="book-list-container p-1 my-1">
      <h3>{location.pathname === "/" ? "Results" : "Saved Books"}</h3>

      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
