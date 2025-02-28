import React from 'react'

const Local = ({handleTypeChange}) => {
  return (
    <div className='Outstation_card'>
    <div className='btn1_card'>
        <button onClick={() => handleTypeChange('Outstation')}>Outstation</button>
        <button onClick={() => handleTypeChange('Local')}>Local</button>
        <button onClick={() => handleTypeChange('Airport')}>Airport</button>
      </div>
    <div className='input'>
      <div className='input1_card'>
      <div>
        <h4>From</h4>
        <input type='text' placeholder='Start typing city' />
        </div>
      <div>
        <h4>Pick Up Date</h4>
        <input type='date' placeholder='Start typing Date' />
        </div>
        <div>
        <h4>Return Date</h4>
        <input type='date' placeholder='Start typing Date' />
        </div>
      </div>
    </div>
    <div className='Explore_Cabs'><button>Explore Cabs</button>
    </div>
  </div>
  )
}

export default Local