import React from "react";
import "./styles.css";

export default function Card(props) {
  return (
    <div className="card">
      {props.image && (
        <img src={props.image} alt={props.title} className="card__image" />
      )}
      <p className="card__title">{props.title}</p>
      <p className="card__description">{props.description}</p>
    </div>
  );
}
