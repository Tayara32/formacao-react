import React from 'react'

const countries = ["England", "USA", "Malaysia", "Germany"]

function FacebookUser(props) {

    const { profile, filter } = props;
    const { img, firstName, lastName, country, type } = profile;
  
    let colorBackground = false;
  
    if (filter === "All") colorBackground = true;
    else if (countries.includes(filter)) {
      colorBackground = profile.country === filter;
    } else if (filter === "Rest") {
      colorBackground = !countries.includes(profile.country);
    }
  
    return (
      <div className={`user ${colorBackground ? "selected" : ""}`}>
        <img src={img} alt={`${firstName} ${lastName}`} />
  
        <div className="details">
          <div><strong>First Name:</strong> {firstName}</div>
          <div><strong>Last Name:</strong> {lastName}</div>
          <div><strong>Country:</strong> {country}</div>
          <div><strong>Type:</strong> {type ? "Student" : "Teacher"}</div>
        </div>
      </div>
    );
}

export default FacebookUser