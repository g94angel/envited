import React from 'react'
import './event-image.css'
import eventImage from '../assets/landing-page.svg'

const EventImage = () => {
  return (
    <div className='event'>
      <img className='event-image' src={eventImage} alt="event" />
    </div>
  )
}

export default EventImage;