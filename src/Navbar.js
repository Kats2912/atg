import React from 'react'
import './index.css';
function Navbar() {
  return (
    <div className='row'>
        <img alt='ATGWORLD'/>
        <div > 
            <input className='navSearch' placeholder='Search for your favourite groups in ATG'/>
        </div>
        <div className='navRight'>
            Create account.
            <a href=''>It's free!</a>
        </div>
    </div>
  )
}

export default Navbar