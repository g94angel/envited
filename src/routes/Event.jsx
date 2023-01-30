import React, {useContext} from 'react'
import { EventContext } from '../context/EventContext'
import cake from '../assets/cake.png'
import './event.css'
// import { FaRegCalendarCheck, FaMapMarkerAlt } from "react-icons/fa";

const Event = () => {
  const {eventData} = useContext(EventContext)
  const {eventName, hostName, date, startTime, endTime, location} = eventData

  return (
    <div className='event-container'>
      <img className='cake-pic' src={cake} alt="cake" />
      <div className='event-details' >
        <div className='detail event-name'>
          {/* <h1>{eventName}</h1> */}
          <h1>Event Name</h1>
          {/* <p>Hosted by <span className='host'>{hostName}</span></p> */}
          <p className='host-name'>Hosted by Angel Giron</p>
        </div>
        <div className='detail'>
          <i class="fa-solid fa-calendar-days"></i>
          <div>
            <p>On {date} from {startTime} to {endTime}</p>
          </div>
        </div>
        <div className='detail'>
          <i class="fa-solid fa-location-pin"></i>
          <p>Location: {location}</p>
        </div>
      </div>
    </div>
   )
}

export default Event;