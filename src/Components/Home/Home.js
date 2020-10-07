import React, { useContext, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import VolunteerServices from '../VolunteerServices/VolunteerServices'
import { UserContext, UserVolunteerContext } from '../../App';




const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [volunteerContext, setVolunteerContext] = useContext(UserVolunteerContext);

    useEffect(()=>{
        fetch('https://fast-chamber-99954.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setVolunteerContext(data) )
    },[])


    return (
        <div>
            <NavBar/>
            <div className="setMiddleStyle">
            <h5>Welcome <span style={{color: 'indigo', backgroundColor: 'bisque'}}>{loggedInUser.name}</span> to Volunteer Network</h5>
            <h3>We Grow By Helping People In Need</h3>
            </div>
            <div className="row" style={{marginLeft: '40px', padding: '140px'}}>
                {
                    volunteerContext.map(service => <VolunteerServices service={service}></VolunteerServices> )
                }
            </div>
            
        </div>
    );
};

export default Home;