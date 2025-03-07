import React from "react";
import { Link } from "react-router-dom";

export default function CardLink({ children, title, description, to="#", btnText="View details" }) {
  return (
    <Link className="card card-link" to={to}>
      <div className="card-body">
        { children }
        <h4>{title}</h4>
        <p className="text-muted">{description}</p>
        <p className="mt-4 more-btn">{btnText} <i className="fa-solid fa-arrow-right fa-fw"></i></p>
      </div>
    </Link>
  );
}
