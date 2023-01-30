import React from 'react'
import './buttonT.css'

const ButtonT = ({label}) => {
  return (
    <div data-testid="button" className='button-style'>{label}</div>
  )
}

export default ButtonT;