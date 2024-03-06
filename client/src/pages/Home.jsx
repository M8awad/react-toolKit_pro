import React, { useState } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (data) => {
    console.log('Submitted data:', data); // Check if data is received correctly
    setName(data.name);
    setEmail(data.email);
  };

  return (
    <div>
      <Header name={name} />
      <SideBar name={name} email={email} />
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
