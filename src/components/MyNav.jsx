import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const MyNav=()=>{
    return(
        <Navbar bg="secondary" expand="lg">
        <Navbar.Brand href="#home"><h1>StriviBook </h1>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto ">
                <Link className='nav-link text-dark ' to='/register'>Registration</Link>
            </Nav>
        </Navbar>
    )
}

export default MyNav