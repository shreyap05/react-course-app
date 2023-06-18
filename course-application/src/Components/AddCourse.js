import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

function AddCourse() {
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const [course, setCourse] = useState({});

  //form handler function
  const handleForm = (e) => {
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  };

  //creating function to post data on server
  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course added successfully",{position: "bottom-center"});
        setCourse({id:"", title:"", description:""});
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Error ! Something went wrong");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3"> Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value.trim()});
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 100 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" style={{ marginRight: "10px" }} color="success">
            Add Course
          </Button>
          <Button type="reset" color="warning " onClick={()=>{
            setCourse({id:"", title:"", description:""});
          }}>
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
}

export default AddCourse;
