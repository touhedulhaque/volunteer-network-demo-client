import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo from '../images/logos/Group 1329.png';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';


const IndividualServiceRegistration = () => {
    const { _id } = useParams();
    const { register, handleSubmit, errors } = useForm();
    // const [volunteerContext, setVolunteerContext] = useContext(UserVolunteerContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [regByServiceId, setRegByServiceId] = useState({});


    useEffect(() => {
        fetch('https://fast-chamber-99954.herokuapp.com/service/' + _id)
            .then(res => res.json())
            .then(data => setRegByServiceId(data))
    }, [_id])



    const onSubmit = data => {
        console.log('form submitted', data)
        const newRegistrations = { ...regByServiceId, registration: data, regTime: new Date() };

        fetch('https://fast-chamber-99954.herokuapp.com/addRegistration', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(newRegistrations)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Registration done successfully');
                }
            })
    }





    return (
        <div className="setMiddleStyle">
            <img src={logo} alt="" width="200px" /> <br />
            <h5>Welcome <span style={{ color: 'indigo', backgroundColor: 'bisque' }}>{loggedInUser.name}</span> to Volunteer Network</h5>
            <h3>We Grow By Helping People In Need</h3>

            <div className="form-design">

                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <h5>Register as a Volunteer</h5>
                    <h6 style={{ backgroundColor: '#fafad2' }}>{regByServiceId.service_name}</h6>
                    <hr />

                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                    {errors.name && <span className="error">Name is required</span>} <hr />


                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your email" />
                    {errors.email && <span className="error">Email is required</span>} <hr />

                    <input type="date" ref={register({ required: true })} /> <hr />



                    <input name="serviceName" defaultValue={regByServiceId.service_name} ref={register({ required: true })} placeholder="service name" />
                    {errors.address && <span className="error">service name is required</span>} <hr />


                    <input type="submit" /> <hr />
                </form>
            </div>
            <Button variant="light">
                <Link to="/home">Back to Home</Link>
            </Button>
        </div>

    );
};


export default IndividualServiceRegistration;