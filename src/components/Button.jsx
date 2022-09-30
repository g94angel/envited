import React from 'react'
import { useNavigate } from 'react-router-dom'
import './button.css'

const Button = () => {
  const navigate = useNavigate();

  const createEvent = () => {
    navigate('/create')
  }
  return (
    <div className='button'>
      <button onClick={createEvent} > 
        
          🎉 Create my event  
        
      </button>
    </div>
  )
}

export default Button