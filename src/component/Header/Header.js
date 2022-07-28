import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './header.css'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from'react-redux'
import { logout } from "../../redux/userSlice";
function Header() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <Navbar  expand="lg"  className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand as={Link}  to='/'>TODO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
          <Nav >
            {currentUser? (
            <>
              <Nav.Link as={Link}  to='/'>Home</Nav.Link>
              <NavDropdown title={currentUser.username}id="basic-nav-dropdown">
              <NavDropdown.Item as={Link}  to='/Login' onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
            </>
          ):(
            <>
            <Nav.Link as={Link} to='/Login'>login</Nav.Link>
             {/* <Nav.Link as={Link} to='/Register'>Register</Nav.Link>  */}
             </>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;