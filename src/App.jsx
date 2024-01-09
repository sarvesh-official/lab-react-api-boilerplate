import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);
  const apiHandle = async () => {
    const response = await axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => setBooks(res.data.books));
  };
  useEffect(() => {
    apiHandle();
  }, []);
  console.log(books);
  return (
    <>
      <div className="main p-2">
        <h1 className="text-center font-bold text-3xl"> Books List</h1>
        {books.map((book) => (
          <div key={book.id} className="flex flex-col gap-5 mb-3">
            <h2 className="font-bold text-xl">{book.title}</h2>
            <div className="flex gap-3">
              <img src={book.imageLinks.smallThumbnail} alt="" />

              <p className="p-2">{book.description}</p>
            </div>
            <h5>Authors : {book.authors}</h5>
            <hr className="border-black" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
