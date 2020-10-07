import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../images/logos/Group 1329.png';
import { UserContext } from '../../App';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const navBarStyle = {
        margin: '20px',
        padding: '10px'

    }
    return (
        <div style={navBarStyle}>
            <Navbar className="row">
                <Navbar.Brand className="col-md-6 justify-content-start mr-auto" href="#home"><img src={logo} alt="" width="200px" /></Navbar.Brand>
                <Nav className="col-md-6 justify-content-end mr-auto">
                    <Nav.Link href="/home" >Home</Nav.Link>
                    <Nav.Link href="/donation" >Donation</Nav.Link>
                    <Nav.Link href="/events" >Events</Nav.Link>
                    <Nav.Link href="/blog" >Blog</Nav.Link>
                    <Nav.Link href="/login" >
                        {loggedInUser.isSignedIn ? <Button variant="danger">
                            Logout
                        </Button>
                            : <Button variant="primary">
                                Login
                        </Button>
                        }
                    </Nav.Link>
                    <Nav.Link href="/admin" >
                        <Button variant="secondary">
                            ADMIN
                        </Button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavBar;