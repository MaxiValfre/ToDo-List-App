import React from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import CompShowTask from './task/ShowTask';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCreateTask from './task/CreateTask';
import CompEditTask from './task/EditTask';

const App = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Notes APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h1>Welcome to my notes app</h1>
        

        
        <Routes>
          <Route path='/' element={<CompShowTask />} />
          <Route path='/create' element={<CompCreateTask />} />
          <Route path='/edit/:id' element={<CompEditTask />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
