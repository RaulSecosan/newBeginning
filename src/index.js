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
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      {/* <Pizza
        name="Good"
        ingredients="Tomato mozarella spinach and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        // price="10" // ne trebuie numar, asta e string
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato mozarella spinach and ricotta cheese"
        photoName="pizzas/funghi.jpg"
        price={13}
      /> */}

      {/* <div>
        {pizzaData.map((pizza) => (
          <Pizza name={pizza.name} />
        ))}
      </div> */}

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaFromMap={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const openHour = 8;
  // const closeHour = 22;
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open.
    </footer>
  );
}

function Pizza(props) {
  return (
    // <div className="pizza">
    /* Are cale directa la folderul public  */
    /* {/* <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
      </div> */

    <li className="pizza">
      <img src={props.pizzaFromMap.photoName} alt={props.name} />
      <div>
        <h3>{props.pizzaFromMap.name}</h3>
        <p>{props.pizzaFromMap.ingredients}</p>
        <span>{props.pizzaFromMap.price}</span>
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
