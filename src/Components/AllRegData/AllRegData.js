import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AllRegData = (props) => {
    const { service_name, image, regTime } = props.reg;

    return (
        <div>
            <div className="col-md-3 bg info" style={{ margin: '40px 0' }}>
                <Card style={{ width: '10rem', borderRadius: '20px', backgroundColor: 'gainsboro', fontWeight: 'bold', color: 'maroon' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Text >
                            {service_name}
                        </Card.Text>
                        <Card.Text >
                            Date: {regTime}
                        </Card.Text>
                        <Button variant="danger">Delete</Button>
                    </Card.Body>
                </Card>
            </div>



        </div>
    );
};

export default AllRegData;