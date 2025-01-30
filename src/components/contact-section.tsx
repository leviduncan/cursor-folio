'use client';

import { useState } from 'react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/send', { // This is the API route on your server
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email');
      }

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section id="contact" className="mt-32 px-6 md:px-12 lg:px-24 py-12">
      <h2 className="text-5xl md:text-6xl font-bold mb-8">Contact Me</h2>
      {success && <p className="text-green-500">Email sent successfully!</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded" rows={4} required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
      </form>
    </section>
  );
}