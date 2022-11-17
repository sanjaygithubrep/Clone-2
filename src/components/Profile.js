import React from "react";

const Profile = () => {
  return (
    <div className="container abc">
      <div className="row">
        <div className="col-sm-3">
          <img className="image" src="images/profile2.jfif" />
        </div>

        <div className="col-sm-4">
          <h4>First Name</h4>
          <input type="text" className="inputBox1" placeholder="First Name" />
        </div>
        <div className="col-sm-5">
          <h4>Last Name</h4>
          <input type="text" className="inputBox1" placeholder="Last Name" />
        </div>
        {/* <div className="col-sm-3 cbox"> */}
      </div>
    </div>
    //     </div>
  );
};

export default Profile;
