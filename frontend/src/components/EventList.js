import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventItem from './EventItem';

const EventList = ({ fetchEvents, events }) => {

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <div>
      {events.map(event => (
        <EventItem key={event.eventId} event={event} fetchEvents={fetchEvents} />
      ))}
    </div>
  );
};

export default EventList;
