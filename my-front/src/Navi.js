import {Container, Nav, Navbar} from 'react-bootstrap'
export const Menus=()=>{
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#home">
                Example Router
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="sample" />
            <Navbar.Collapse id="sample">
                <Nav className="ms-auto">
                    <Nav.Link active href="/">Component One</Nav.Link>
                    <Nav.Link href="/sign">New Account</Nav.Link>
                    <Nav.Link href="/third">Component Three</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}