import React, {useState} from 'react'
import { Modal, Button, ListGroup } from 'react-bootstrap'


const Profile = ({users}) => {
    
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

return (
    <>
        <Button variant="primary" onClick={handleShow}>
            More Info
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{users.name}</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>Username: {users.username}</ListGroup.Item>
                    <ListGroup.Item>Email: {users.email}</ListGroup.Item>
                    <ListGroup.Item>Address: {users.address.street} {users.address.suite} {users.address.city} {users.address.zipcode}</ListGroup.Item>
                    <ListGroup.Item>Phone: {users.phone}</ListGroup.Item>
                    
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </>
);
}

export default Profile
