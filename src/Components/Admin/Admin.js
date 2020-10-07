import React, { useState, useEffect, useContext } from 'react';
import ServiceInventory from '../ServiceInventory/ServiceInventory';
import AllRegData from '../AllRegData/AllRegData';
import logo from '../images/logos/Group 1329.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';



const Admin = () => {
    const [registrations, setRegistrations] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://fast-chamber-99954.herokuapp.com/registrations')
            .then(res => res.json())
            .then(data => setRegistrations(data))
    }, [])


    return (
        <div className="setMiddleStyle">
            <img src={logo} alt="" width="200px" /> <br />
            <h1>"Admin panel"</h1>
            <br />
            <Button variant="info">
                <Link to="/events">Click here to create event</Link>
            </Button>

            <div className="row" style={{ marginLeft: '40px', padding: '140px' }}>
                {
                    registrations.map(reg => <AllRegData reg={reg}></AllRegData>)
                }
            </div>
            <br />
            <Button variant="warning">
                <Link to="/home">Back to Home</Link>
            </Button>
            <br />
            <div className="setMiddleStyle">
                <h6>This Button only use for load bulk data</h6> <hr />
                <ServiceInventory />
            </div>
        </div>
    );
};

export default Admin;