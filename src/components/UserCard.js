import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import '../App.css';
import Profile from './Profile';


const UserCard = ({users}) => {
    
    
    return (
        <div className='userCard' >
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height: 259}} variant="top" src="https://wce.education/wp-content/uploads/2020/09/wce-avatar.png"  />
                    <Card.Body>
                        <Card.Title>{users.name}</Card.Title>
                        <ListGroup variant="flush">
                        <ListGroup.Item>Username: {users.username}</ListGroup.Item>
                        
                        </ListGroup>
                        <Profile users={users}/>
                    </Card.Body>
                </Card>
            
        </div>
    )
}
export default UserCard