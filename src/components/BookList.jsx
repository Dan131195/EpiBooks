import books from "../data/horror.json";
import SingleBook from "./SingleBook";

const booksList = [];


const BookList = function () {
  return (
    <div className="container row m-auto justify-content-between row-cols-xs-2 row-cols-md-3 row-cols-lg-4">
      {books.map((i) => {
        return (
            booksList.push(i),
            SingleBook(i)
        )
      })}
    </div>
  );
};

export default BookList;
console.log(booksList);
