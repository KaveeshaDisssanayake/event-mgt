import React from 'react';

const EventDetail = ({ event }) => {
  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <h3>Attendees</h3>
      <ul>
        {event.attendees.map(attendee => (
          <li key={attendee.attendeeId}>{attendee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventDetail;
