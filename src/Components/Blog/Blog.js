import React, { useState, useContext, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../images/logos/Group 1329.png'

const Blog = () => {
    const [indivRegInfo, setIndivRegInfo] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://fast-chamber-99954.herokuapp.com/registrations?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setIndivRegInfo(data))
    }, [indivRegInfo])
    return (
        <div className="setMiddleStyle">
            <img src={logo} alt="" width="200px" /><br />
            <h3>We Grow By Helping People In Need</h3>
            <h4>"This is <span style={{ color: 'indigo', backgroundColor: 'bisque' }}>{loggedInUser.name}</span> Personal Blog"</h4> <br />
            <Button variant="warning">
                <Link to="/home">Back to Home</Link>
            </Button>
            {
                indivRegInfo.map(p =>
                    <div className="bg primary" style={{ margin: '40px 0' }}>
                        <Card style={{ width: '18rem', borderRadius: '20px', backgroundColor: 'gainsboro', fontWeight: 'bold', color: 'maroon' }}>
                            <Card.Img variant="top" src={p.image} />
                            <Card.Body>
                                <Card.Text >
                                    {p.service_name}
                                </Card.Text>
                                <Card.Text >
                                    Date: {p.regTime}
                                </Card.Text>
                                <Button variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }

            <Button variant="light">
                <Link to="/home">Back to Home</Link>
            </Button>
        </div>
    );
};

export default Blog;
