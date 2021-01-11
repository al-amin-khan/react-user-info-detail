import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import  from 'react-bootstrap/';

const User = (props) => {
  const {id, name, email, phone, website} = props.user;

  return (
    <div className='m-2 p-3 border border-info'>
      <h5>Name: {name} </h5>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default User;