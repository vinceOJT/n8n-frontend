'use client';

import { useState } from 'react';

export default function N8nForm() {
  const [email, setEmail] = useState('');
  const [name, setEname] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userEmail: email, userName: name }),
    });

    if (response.ok) {
      alert('Data sent to n8n!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="name"
        value={name}
        onChange={(e) => setEname(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Send to n8n</button>
    </form>
  );
}