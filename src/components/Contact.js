import React from 'react'

const Contact = () => {
  return (
    <div className='container cbc'>
        <div className='row'>
            <div className='col-sm-3'>

            </div>
            <div className='col-sm-9'>
            <h4>Contact Number</h4>
        <input type="text" className="inputBox" placeholder='Contact Number' />
                <h4>Email Address</h4>
        <input type="text" className="inputBox" placeholder='Email Address' />
                <h4>Country</h4>
        <input type="text" className="inputBox" placeholder='Country' />
        <button className="appButton" type="button">Update</button>
            </div>

        </div>

    </div>
  )
}

export default Contact