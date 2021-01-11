import React, { useEffect, useState } from 'react';
import User from '../User/User';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header';

const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <Header></Header>
      <Row>
        {
          users.map(user => 
                        <Col md={4} key={user.id}>
                          <User user={user}></User>
                        </Col>
                  )
        }
      </Row>
    </div>
  );
};

export default Main;