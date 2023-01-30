import React, {useContext} from 'react'
import { EventContext } from '../context/EventContext'
import cake from '../assets/cake.png'
import './event.css'
import { FaRegCalendarCheck, FaMapMarkerAlt } from "react-icons/fa";

const Event = () => {
  const {eventData} = useContext(EventContext)
  console.log(eventData);
  const {eventName, hostName, date, startTime, endTime, location} = eventData

  return (
    <div className='event-container' >
      <img className='cake-pic' src={cake} alt="cake" />
      <div className='event-details' >
        <div className='host-info'>
          <h1>{eventName}</h1>
          <p>Hosted by <span>{hostName}</span></p>
        </div>
        <div className='event-deet'>
          <FaRegCalendarCheck/>
          <div>
          <p>{`${date} ${startTime}`}</p>
          <p>{`${endTime}`}</p>
          </div>
        </div>
        <div className='event-deet'>
          <FaMapMarkerAlt/>
          <p>{location}</p>
        </div>
      </div>
    </div>
   )
}

export default Event;