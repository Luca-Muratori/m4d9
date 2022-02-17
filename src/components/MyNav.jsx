import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const MyNav=()=>{
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
                <Link to='/registration'>Registration</Link>
            </Nav>
        </Navbar>
    )
}

export default MyNav