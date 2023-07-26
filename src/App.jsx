import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './css/App.sass'

function App() {


  return (
    <>
    <div className='container'>
      <div className='steps-container'>
        <button className='pagination-btn'>1</button>
        <button className='pagination-btn'>2</button>
        <button className='pagination-btn'>3</button>
        <button className='pagination-btn'>4</button>
      </div>
      <div className='card'>
        <h2>Personal info</h2>
        <p>Please provide your name, email, address and phone number.</p>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder='e.g. Stephen Value' />
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" placeholder='e.g. stephenvalue@email.com' />
        <label htmlFor="num">Phone Number</label>
        <input id="num" type="number" placeholder='e.g. +1 234 567 890' />
        <button className='next-btn'>Next Step</button>
      </div>
    </div>
    </>
  )
}

export default App
