import React from 'react'

const Popup = ({show, onClose}) => {
  return (
    <div className='popup' style={{display: show ? 'block' : 'none'}}>
      <h2>Are you sure?</h2>
      <button>Confirm</button>
      <button>Cancel</button>
    </div>
  )
}

export default Popup
