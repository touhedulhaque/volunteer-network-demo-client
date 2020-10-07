import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Events = () => {
    return (
        <div className="setMiddleStyle">
            <h1 >This is Events</h1>
            <div className="form-design">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Event Title</Form.Label>
                            <Form.Control type="text" placeholder="enter event name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type="date" placeholder="date" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="write description" />
                    </Form.Group>

                    <Form>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Banner" />
                        </Form.Group>
                    </Form>


                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="confirm" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        create
                    </Button>
                </Form>
            </div>
            <Button variant="light">
                <Link to="/home">Back to Home</Link>
            </Button>
        </div>
    );
};

export default Events;