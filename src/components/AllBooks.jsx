import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import books from "../data/fantasy.json";

const AllBooks = function () {
  return (
    <div className="container row m-auto justify-content-between row-cols-xs-2 row-cols-md-3 row-cols-lg-4">
      {books.map((book, i) => {
        return (
          <Card style={{ width: "15rem" }} key={i} className="myCard mb-3">
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
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
