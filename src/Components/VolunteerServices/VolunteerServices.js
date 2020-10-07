import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const VolunteerServices = (props) => {
    const { image, service_name, _id } = props.service;
    
    const history = useHistory();
    const handleClick = (_id) => {
        history.push(`/service/${_id}`)
    }

    

   

    return (
        <div className="col-md-3 bg info" style={{ margin: '40px 0' }}>
            <Card  style={{ width: '14rem', borderRadius: '20px', backgroundColor: 'cornsilk', fontWeight: 'bold', color: 'indigo' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Text >
                        {service_name}
                    </Card.Text>
                    <Button onClick={() => handleClick(_id)} variant="primary">Click for Registration</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default VolunteerServices;