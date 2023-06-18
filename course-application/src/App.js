import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Components/Home";
import Course from "./Components/Course";
import Allcourses from "./Components/Allcourses";
import AddCourse from "./Components/AddCourse";
import Header from "./Components/Header";
import Menus from "./Components/Menus";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const btnHandle = () => {
    toast("My First Message");
  };
  return (
    <div>
         <BrowserRouter>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
             
              <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/add-course" element={<AddCourse />}/>
              <Route path="/view-courses" element={<Allcourses/>}/>
              
              </Routes>
            </Col>
          </Row>
        </Container>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
