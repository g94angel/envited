import React, {useContext} from 'react'
import { EventContext } from '../context/EventContext'
import { useNavigate } from 'react-router'
import './create.css'

// - After clicking the “create event” button, the user should be directed to a new page where they can input their event details. This should include the following: Event name, Host name, Start and End time/date, Location and Event photo.
// - Ensure there is a “next” button on the page – this should take the user to the “/event” page.
// - This page has no pre-made design as we would love to see how creative you can get without the input from our designers. Remember to style it using Envited’s colours which are in your Figma file.

const Create = () => {
  const {eventData, setEventData} = useContext(EventContext)

  const navigate = useNavigate();

  const confirmEvent = () => {
    navigate('/event')
  }

  // const [formData, setFormData] = useState({
  //   eventName: "",
  //   hostName: "",
  //   startTime: "",
  //   endTime: "",
  //   date: "",
  //   location: "",
  //   eventPhoto: ""
  // })

  function handleChange(e) {
    const {name, value} = e.target;
    setEventData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))

  }
  

  return (
    <div>
      <h1>🎉 My Event 🎉</h1>
      <div className="form-container">
        <form className="form" onSubmit={confirmEvent} >
          
          <input 
            className='form-input'
            name="eventName" 
            type="text" 
            placeholder='Event Name' 
            onChange={handleChange}
            value={eventData.eventName}
            required />
          
          <input 
            className='form-input'
            name="hostName" 
            type="text" 
            placeholder='Host Name' 
            onChange={handleChange} 
            value={eventData.hostName} required/>

          <input className='form-input' name="date" type="text" placeholder='Date - mm/dd/yyyy' onChange={handleChange} value={eventData.date} required/>
          
          <input className='form-input' name="startTime" type="text" placeholder='Start Time - PST' onChange={handleChange} value={eventData.startTime} required/>
          
          <input className='form-input' name="endTime" type="text" placeholder='End Time - PST' onChange={handleChange} value={eventData.endTime} required/>
          
          
          <input className='form-input' name="location" type="text" placeholder='Location' onChange={handleChange} value={eventData.location} required/>
          
          <div>
            <label 
              htmlFor="event-photo">Event Photo: </label>
            <input
              className='fileInput'
              name="eventPhoto" 
              id="event-photo" 
              type='file'
              onChange={handleChange} 
              value={eventData.eventPhoto} />
          </div>
          <button className='btn' >Next</button>
        </form>
      </div>
    </div>
  )
}

export default Create