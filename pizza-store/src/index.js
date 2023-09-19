import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";
const pdata = pizzaData;

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast Kapil Pizza company</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* conditional rendering with short circuiting */}
      {/* {pdata.length >0&& (
        <ul className="pizzas">
          {pdata.map((pizza) => (
            <Pizza pizzaobject={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {/* 
ternary operator rendering all js is done in jsx {} */}

      {pdata.length > 0 ? (
        <>
          {/* <> react fragment acts like div but doest not mess up the formatting */}
          <p>
            There aren't enough food, service, value or atmosphere ratings for
            Delicacy, New York yet. Be one of the first to write a review!
          </p>
          <ul className="pizzas">
            {pdata.map((pizza) => (
              <Pizza pizzaobject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are working on menu</p>
      )}
    </main>
  );
}

// destructiong pizaa props
function Pizza({ pizzaobject }) {
  // if (pizzaobject.soldOut) return null;
  return (
    <li className={`pizza ${pizzaobject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobject.photoName} alt="pizza spinaci" />
      <div>
        <h3>{pizzaobject.name}</h3>
        <p>{pizzaobject.ingredients}</p>
        {/* {pizzaobject.soldOut ? (
          <span>sold out</span>
        ) : (
          <span>{pizzaobject.price}</span>
        )} */}
        <span>{pizzaobject.soldOut ? "Sold Out" : pizzaobject.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;
  console.log(isopen);
  // if (hour >= openhour && hour <= closehour) {
  //   alert("we are currently open");
  // } else {
  //   alert("sorry we are closed");
  // }
  return (
    <footer className="footer">
      {isopen ? (
        <Order closehour={closehour} />
      ) : (
        <p>
          we are happy to welcome you between {openhour}:00 and {closehour}:00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p> we are Open until {props.closehour}:00. Come visit us</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
