import React, { useState, memo } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AddUser({ show, setShow, setUsers, setFilteredUsers }) {
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        setFilteredUsers(prev => [...[data], ...prev]);
        setUsers(prev => [...[data], ...prev]);
        setShow(false)
    };

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Member</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="John Doe"
                            onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
                            autoFocus
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            onChange={e => setData(prev => ({ ...prev, email: e.target.value }))}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Error: Invalid email
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="+8801736909678"
                            onChange={e => setData(prev => ({ ...prev, phone: e.target.value }))}
                            pattern="[+]{1}[0-9]{11,14}"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Error: Invalid phone number
                        </Form.Control.Feedback>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary">
                        Add
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

}

export default memo(AddUser);