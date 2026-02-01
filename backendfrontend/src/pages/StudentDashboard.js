import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';

function StudentDashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <div className="events-container">
        {events.map(event => <EventCard key={event._id} event={event} />)}
      </div>
    </div>
  );
}

export default StudentDashboard;
