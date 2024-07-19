import React from 'react';
import axios from 'axios';

const EventItem = ({ event, fetchEvents }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/events/${event.eventId}`);
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event', error);
    }
  };

  return (
    <div>
      <h3>{event.name}</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default EventItem;
