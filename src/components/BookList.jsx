import books from "../data/horror.json";
import SingleBook from "./SingleBook";

import Form from "react-bootstrap/Form";

const booksList = [];

const BookList = function () {
  return (
    <div className=" text-center my-4">
      <Form.Label htmlFor="book">Cerca il libro che preferisci</Form.Label>
      <Form.Control type="text" className='myInput m-auto'/>
      <Form.Text muted>Inserisci un libro..</Form.Text>
      <div className="container-fluid row m-auto justify-content-between mt-4">
        {books.map((i) => {
          return booksList.push(i), SingleBook(i);
        })}
      </div>
    </div>
  );
};

export default BookList;
console.log(booksList);
