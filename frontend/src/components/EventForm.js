import React, { useState } from 'react';
import axios from 'axios';

const EventForm = ({ fetchEvents }) => {
  const [event, setEvent] = useState({
    name: '',
    description: '',
    date: '',
    location: ''
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/events', event);
    fetchEvents();
    setEvent({ name: '', description: '', date: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Event Name"
        value={event.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={event.description}
        onChange={handleChange}
      ></textarea>
      <input
        type="date"
        name="date"
        value={event.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={event.location}
        onChange={handleChange}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
