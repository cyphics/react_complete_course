import {Container, Nav, Navbar} from "react-bootstrap";

const NavBar = props => {
    return (
      <Navbar bg={"dark"} expand={"lg"}>
          <Container>
              <Navbar.Brand href={"#home"}>
                  React Demos
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
              <Navbar.Collapse id={"basic-navbar-nav"}>
                  <Nav className="me-auto">
                      <Nav.Link onSelect={props.selector("expenses")}>Expenses Chart</Nav.Link>
                      <Nav.Link onSelect={props.selector("tasks")} >Tasks</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    )
}

export default NavBar;