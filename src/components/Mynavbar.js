import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

const Mynavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
       Users List
      </Navbar.Brand>
    </Container>
  </Navbar>
        </div>
    )
}

export default Mynavbar
