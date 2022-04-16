import React from "react";
import "./App.css";
import Booklist from "./components/Booklist/Booklist";
function App({ author, title }) {
  const [books, setBooks] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `${count} books`;
  }, [count]);

  function addBook(author, title) {
    if (author && title) {
      const newItem = {
        id: Math.floor().toString(36).substring(2, 9),
        author: author,
        title: title,
      };
      setBooks([...books, newItem]);
      setCount(books.length + 1);
      console.log(books, newItem);
    }
  }

  return (
    <div className="app-js-booklist">
      <Booklist addBook={addBook} />

      <div className="output-main-div">
        <div className="output-head">
          <div className="div-1">My Books</div>
        </div>
        <hr></hr>
        <div className="under-head"></div>
      </div>
    </div>
  );
}

export default App;
