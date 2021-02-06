import "./book-card.styles.scss";

const BookCard = ({ book }) => {
  let { title, authors, averageRating, pageCount, imageLinks, description, subtitle } = book.volumeInfo;

  return (
    <div className="book-card p-1 my-1">
      <div className="book-card-header">
        <div className="book-info">
          <h3 className="title">{title}</h3>
          <p className="subtext">{subtitle}</p>
          <p className="author">Written By {authors}</p>
        </div>
        <div className="buttons">
          <button className="view-btn">View</button>
          <button className="save-btn">Save</button>
        </div>
      </div>

      <div className="book-card-details">
        {imageLinks && <img src={imageLinks.thumbnail} alt="" className="book-card-image" />}
        <p className="book-description">{description ? description : "No description available for this book"}</p>
      </div>
    </div>
  );
};

export default BookCard;
