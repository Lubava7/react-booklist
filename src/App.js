import React from "react";
import "./App.css";

function App() {
  return (
    <div classame="booklist">
      <div className="header">
        <h3>Booklist App</h3>
        <label>Add and view your books in this list</label>
      </div>

      <div className="input-fields">
        <div className="book-title">
          <p>Book Title</p>
          <input className="input" placeholder="write the book title" />
        </div>
        <div className="author-input">
          <p>Author</p>
          <input className="input" placeholder="write the book author" />
        </div>
        <div className="button-book">
          <button className="btn">Add a New Book</button>
        </div>
      </div>
    </div>
  );
}

export default App;
