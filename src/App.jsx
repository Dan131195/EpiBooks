import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllBooks from "./components/AllBooks";
import MyFooter from "./components/MyFooter";

import "bootstrap/dist/css/bootstrap.min.css";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />
      <BookList/>
      <SingleBook />
      <Welcome />
      <AllBooks />
      <MyFooter />
    </>
  );
}

export default App;
