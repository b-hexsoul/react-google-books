const BookCard = ({ book }) => {
  let { title, authors, averageRating, pageCount, imageLinks, description, subtitle } = book.volumeInfo;

  return (
    <div className="book-card">
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

      <div className="book-details">
        <img src={imageLinks.thumbnail} alt="" className="cover-image" />
        <p className="book-description">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
