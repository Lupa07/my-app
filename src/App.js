import logo from "./logo.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import pera from './imagenes/Pera.jpg';


function App() {
  const [loading, setloading] = useState(true);
  const [gato, setGato] = useState("Teko");
  const [fruits, setFruits] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/fruits")
      .then((response) => response.json())
      .then((responseJson) => {
        setFruits(responseJson);
        setloading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <div>cargando...</div>;
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {fruits.map((item) => (
            <ul key={item.id}>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li><img src={item.name}></img></li>
              
            
          )
            </ul>
          ))}

          <form>
            <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    );
  }
}
export default App;
