import React from "react";
import "./Booklist.css";

function Booklist({ addBook }) {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");

  function handleChange(e) {
    setAuthor(e.target.value);
  }
  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    addBook(author, title);
    setAuthor("");
    setTitle("");
  }

  return (
    <div classame="booklist">
      <div className="header">
        <h3>Booklist App</h3>
        <label>Add and view your books in this list</label>
      </div>
      <div className="input-fields">
        <div className="book-title">
          <p>Book Title</p>
          <input
            className="input"
            type="text"
            placeholder="write the book title"
            value={title}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="author-input">
          <p>Author</p>
          <input
            className="input"
            type="text"
            placeholder="write the book author"
            value={author}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="button-book">
          <button className="btn" onClick={addBook}>
            Add a New Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booklist;
