import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Creeam noi componente in acelasi fisier
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//prop --> property
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      {numPizza > 0 ? (
        //React fragment <>, daca puneam intr un div ne strica formatul deoarece punea si <p> si <u> impreuna, cu react fragment sunt separate
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis no
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaFromMap={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen)
  return (
    <footer className="footer">
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00</p>
          <button className="btn">Order</button>
        </div>
      )} */}
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
      {/* {new Date().toLocaleTimeString()} We're currently open. */}
    </footer>
  );
}

function Pizza(props) {
  return (
    // <li className={props.pizzaFromMap.soldOut ? "pizza sold-out" : "pizza"}>
    <li className={`pizza ${props.pizzaFromMap.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaFromMap.photoName} alt={props.name} />
      <div>
        <h3>{props.pizzaFromMap.name}</h3>
        <p>{props.pizzaFromMap.ingredients}</p>
        <span>
          {props.pizzaFromMap.soldOut ? "SOLD OUT" : props.pizzaFromMap.price}
        </span>
      </div>
    </li>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
