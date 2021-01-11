import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const User = (props) => {
  const {id, name, email, phone, website} = props.user;

  return (
    <div className='m-2 p-3 border border-info'>
      <h5>Name: {name} </h5>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <Link to={`/about/${id}`}><p className='btn btn-primary'>Show Detail of {id}</p></Link>
    </div>
  );
};

export default User;