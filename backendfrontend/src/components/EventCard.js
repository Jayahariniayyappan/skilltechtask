import React from 'react';

function EventCard({ event }) {
  const register = () => alert(`Registered for ${event.name}`);

  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>Department: {event.department?.name}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <button onClick={register}>Register</button>
    </div>
  );
}

export default EventCard;
