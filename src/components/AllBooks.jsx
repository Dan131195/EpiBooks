import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import books from "../data/fantasy.json";

const AllBooks = function () {
  return (
    <div className="container row m-auto justify-content-between row-cols-xs-2 row-cols-md-3 row-cols-lg-4">
      {books.map((book) => {
        return (
          <Card style={{ width: "15rem" }} key={book.asin} className="myCard mb-3 bg-dark">
            <Card.Img variant="top" src={book.img} className="bg-dark"/>
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title className="text-white">{book.title}</Card.Title>
              <Card.Text className="text-white">$ {book.price}</Card.Text>
              <Button variant="primary">Aggiungi</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default AllBooks;
