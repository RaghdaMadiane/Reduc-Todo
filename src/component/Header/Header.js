import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand ><Link to='/'>Home</Link></Navbar.Brand>
        <Navbar.Toggle />
      
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to='/toDo'>todo-list</Link>
         
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;