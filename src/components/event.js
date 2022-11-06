import React from "react"
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


const Event = () => {
  const events = useSelector((state) => state);
  const events_markup = events.map((event) => {
    return (
      <div key={uuidv4()}>
        <h2>{event.city}</h2>
        
        <ul>
          <li>Artiste: {event.artiste}</li>
          <li>Price: ${event.price}</li>
        </ul>
      </div>
    )
  })

  return (
  <div>
    <div>{events_markup}</div>
  </div>
  );
}

export default Event;