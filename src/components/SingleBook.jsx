import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleBook = function (i) {
  return (
    <Card style={{ width: "15rem" }}  className="myCard mb-3 bg-dark">
      <Card.Img variant="top" src={i.img} className="bg-dark" />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="text-white">{i.title}</Card.Title>
        <Card.Text className="text-white">$ {i.price}</Card.Text>
        <Button variant="primary">Aggiungi</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
