import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";

function Course({ course, update }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState({
    title: course.title,
    description: course.description,
  });

  const deleteCourse = (id) => {
    axios
      .delete(`${base_url}/courses/${id}`)
      .then(
        (response) => {
          toast.success("Course deleted");
          update(id);
        },
        (error) => {
          toast.error("Course not deleted! Server problem");
        }
      );
  };

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCourse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = () => {
    axios
      .put(`${base_url}/courses/${course.id}`, updatedCourse)
      .then(
        () => {
          toast.success("Course updated successfully");
          setIsUpdating(false);
          update(course.id); // Notify the parent component about the update
        },
        (error) => {
          toast.error("Error updating course");
        }
      );
  };

  return (
    <Card className="text-center">
      <CardBody>
        {isUpdating ? (
          <>
            <input
              type="text"
              name="title"
              value={updatedCourse.title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description"
              value={updatedCourse.description}
              onChange={handleInputChange}
            />
          </>
        ) : (
          <>
            <CardSubtitle className="font-weight-bold">
              {course.title}
            </CardSubtitle>
            <CardText>{course.description}</CardText>
          </>
        )}
        <Container className="text-center">
          <Button
            style={{ marginRight: "10px" }}
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
          {isUpdating ? (
            <Button color="warning ml-3" onClick={handleUpdateSubmit}>
              Save
            </Button>
          ) : (
            <Button color="warning ml-3" onClick={handleUpdate}>
              Update
            </Button>
          )}
        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;
