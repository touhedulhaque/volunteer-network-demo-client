import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logos/Group 1329.png'


const Donation = (props) => {

    return (
        <div className="setMiddleStyle">
            <img src={logo} alt="" width="200px" />
            <br />
            <div className="boxStyle">
                <h4>For Donation please contact the following contacts:</h4>
                <br />
                <ul>
                    <li>ffff@volunteerservice.com</li>
                    <li>ffff@volunteerservice.com</li>
                    <li>ffff@volunteerservice.com</li>
                    <li>ffff@volunteerservice.com</li>
                    <li>Tel: +417577575757</li>
                </ul>
            </div>


            <Button variant="light">
                <Link to="/home">Back to Home</Link>
            </Button> <br />
            <Button variant="warning">
                <Link to="/blog">click here to see your all register volunteer service</Link>
            </Button>
        </div>
    );
};

export default Donation;