import React from 'react'

const Profile = () => {
  return (
    <div className="container abc">
         <img className="image" src="images/profile2.jfif" />
        <div className="row">
           
            <div className="col-sm-6">
           
                <h4>First Name</h4>
        <input type="text" className="inputBox" placeholder='First Name' />
                <h4>Contact Number</h4>
        <input type="text" className="inputBox" placeholder='Contact Number' />
                <h4>Email Address</h4>
        <input type="text" className="inputBox" placeholder='Email Address' />
                <h4>Country</h4>
        <input type="text" className="inputBox" placeholder='Country' />
        <button className="appButton" type="button">Sign In</button>
        </div>
            <div className="col-sm-6 cbox">
                <h4>Last Name</h4>
        <input type="text" className="inputBox" placeholder='Last Name' />
        </div>
        </div>
    </div>
  )
}

export default Profile