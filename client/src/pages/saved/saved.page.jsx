import BookList from "../../components/book-list/book-list.component";
let books = [{ title: "nothing" }];

const Saved = () => {
  return (
    <div>
      <BookList books={books} />
    </div>
  );
};

export default Saved;
