import "./App.css";
import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Detail from "./components/Detail";
import Card from "./components/Card";
import Checkout from "./components/Checkout";
import Resgiter from "./components/Resgiter";

function App() {
  const [card, setCard] = useState([]);
  const total = card.reduce((x, item) => x + item.price * item.amount, 0);

  const handleClick = (item) => {
    if (card.indexOf(item) !== -1) {
      alert("Đã Có Sản Phẩm Trong Giỏ Hàng");
      return;
    }
    setCard([...card, item]);
    alert("Đã Thêm Sản Phẩm Vào Giỏ Hàng");
    //console.log(card);
  };

  const handleChange = (item, d) => {
    const ind = card.indexOf(item);
    const arr = card;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCard([...arr]);
  };

  return (
    <Fragment>
      <Header size={card}></Header>
      <Routes>
        <Route
          path="/"
          element={<Product handleClick={handleClick}></Product>}
        ></Route>
        <Route
          exact
          path="/product/:id"
          element={<Detail handleClick={handleClick}></Detail>}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/res" element={<Resgiter />}></Route>
        <Route
          path="/cart"
          element={
            <Card
              card={card}
              total={total}
              setCard={setCard}
              handleChange={handleChange}
            ></Card>
          }
        ></Route>
        <Route
          path="/checkout"
          element={<Checkout card={card} total={total}></Checkout>}
        ></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
