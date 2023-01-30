import React from 'react'
import Header from './Header';
import EventImage from './EventImage';
import Button from './Button';

const Home = () => {
  return (
    <div className='main-container'>
      <Header/>
      <EventImage/>
      <Button/>
    </div>
  )
}

export default Home