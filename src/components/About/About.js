import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  const {uid} = useParams();
  const [about, setAbout] = useState({});

  const {name, email, phone, website,} = about;

  useEffect(() =>{
    const url = `https://jsonplaceholder.typicode.com/users/${uid}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setAbout(data))
    .catch(error => console.log(error))
  }, []);
  
  return (
    <div className='d-flex justify-content-center'>
      <div className='pt-5'>
        <h2>Name: {name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
      </div>
    </div>
    
  );
};

export default About;