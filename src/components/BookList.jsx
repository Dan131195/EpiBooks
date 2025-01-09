import books from "../data/horror.json";
import SingleBook from "./SingleBook";

import Form from "react-bootstrap/Form";

const booksList = [];

const BookList = function () {
  return (
    <>
      <Form.Label htmlFor="book">Cerca il libro che preferisci</Form.Label>
      <Form.Control
        type="text"
      />
      <Form.Text  muted>
        Inserisci un libro..
      </Form.Text>
      <div className="container-fluid row m-auto justify-content-between">
        {books.map((i) => {
          return booksList.push(i), SingleBook(i);
        })}
      </div>
    </>
  );
};

export default BookList;
console.log(booksList);