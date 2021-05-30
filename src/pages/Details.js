import "./Details.css";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";

const Details = (props) => {
  const [persons, setPersons] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, [id]);

  return (
    <div className="main">
      <div className="container">
        <h2>Details of {id} </h2>
        Name: <p>{persons?.name}</p>
        Website: <p>{persons?.website}</p>
        E-mail: <p>{persons?.email}</p>
        <img
          alt="pic"
          src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        />
        <button onClick={() => history.push("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default Details;
