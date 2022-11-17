import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid bbc">
        <div className="row">
            <div className="col-sm-2">
            <button type="button" className="btn btn-primary">Logo</button>

                <h6>1901 Thornridge Cir.Shiloh,Hawaii 81063</h6>
                
                
            </div>
            <div className="col-sm-2">
                <h2>Company</h2>
                <h6>About Us</h6>
                <h6>Team</h6>
                <h6>Contact</h6>

            </div>
            <div className="col-sm-2">
            <h2>Product</h2>
                <h6>Service</h6>
                <h6>Freelancer</h6>
                <h6>Features</h6>
                <h6>Development</h6>

            </div>
            <div className="col-sm-2">
            <h2>Link</h2>
                <h6>Privacy Policy</h6>
                <h6>Term & Conditions</h6>
                <h6>FAQ</h6>
            </div>
            <div className="col-sm-4">
                <h1>Follow Us</h1>
                <img src="images/logo.png" />
                <img src="images/Facebook-logo.png" />
                <img src="images/insta.jpg" />

            </div>
        </div>

    </div>
  )
}

export default Footer