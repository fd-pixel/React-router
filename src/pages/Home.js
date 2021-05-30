import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

const App = () => {
  const [persons, setPersons] = useState();
  const history = useHistory();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, []);
  const personHandler = (id) => {
    console.log(id);
    history.push(`/details/${id}`);
  };

  return (
    <div className="App">
      {persons?.map((person, key) => (
        <div key={person.id}>
          <p
            className="title"
            style={{ border: "1px solid", cursor: "pointer", width: "50vh" }}
            onClick={() => personHandler(person.id)}
          >
            <p>{person.name}</p>
            <p>{person.id}</p>
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
