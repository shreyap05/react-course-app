import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function Menus() {
  return (
    <div>
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/add-course"
        >
          Add Courses
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-courses"
        >
          View Courses
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#!"
        >
          About
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#!"
        >
          Contact
        </Link>
      </ListGroup>
    </div>
  );
}
export default Menus;
