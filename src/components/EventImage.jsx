import React from 'react'
import './event.css'
import eventImage from '../assets/Landing page image.svg'

const EventImage = () => {
  return (
    <div className='event'>
      <img src={eventImage} alt="event" />
    </div>
  )
}

export default EventImage;