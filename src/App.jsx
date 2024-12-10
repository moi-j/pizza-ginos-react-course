import { createRoot } from "react-dom/client";
import Order from "./order.jsx";

const App = () => {
  const pizzas = [
    {
      name: "The Pepperoni Pizza",
      description: "Some dope Pizza",
    },
    {
      name: "The Carbonara Pizza",
      description: "Some dope Pizza",
    },
    {
      name: "The Americano Pizza",
      description: "Some dope Pizza",
    },
    {
      name: "The Pineapple Pizza",
      description: "Some dope Pizza",
    },
    {
      name: "The BBQ Pizza",
      description: "Some dope Pizza",
    },
  ];
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Order />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
