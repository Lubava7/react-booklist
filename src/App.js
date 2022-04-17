import React from "react";
import "./App.css";
import Booklist from "./components/Booklist/Booklist";
import { MdDeleteOutline } from "react-icons/md";

const getDataFromLS = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  // const [books, setBooks] = React.useState([]);
  const [books, setBooks] = React.useState(getDataFromLS());
  const [count, setCount] = React.useState(books.length);

  React.useEffect(() => {
    document.title = `${count} books`;
  }, [count]);
  React.useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  function addBook(author, title) {
    if (author && title) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        author: author,
        title: title,
      };
      setBooks([...books, newItem]);
      setCount(books.length + 1);
      console.log(books, newItem);
    }
  }
  function deleteBook(id) {
    setBooks([...books.filter((book) => book.id !== id)]);
    setCount(books.length - 1);
  }

  return (
    <div className="app-js-booklist">
      <div className="header">
        <h3>Booklist App</h3>
        <label>Add and view your books in this list</label>
      </div>
      <div className="comp-n-output">
        <Booklist addBook={addBook} />

        <div className="output-main-div">
          <div className="output-head">
            <div className="div-1">My Books</div>
          </div>
          <hr></hr>
          <div className="under-head">
            {books.length === 0
              ? "No books yet"
              : books.map((book) => {
                  return (
                    <div key={book.id} className="map-output">
                      {book.author} , "{book.title}"
                      <div>
                        <MdDeleteOutline onClick={() => deleteBook(book.id)} />
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
