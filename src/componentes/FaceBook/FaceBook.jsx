import React from 'react'
import profiles from "../../data/berlin.json";
import styles from './FaceBook.module.css'

function FaceBook() {
  return (
    <div className={styles.container}>
  {profiles.map((profile, index) => (
    <div key={index} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={profile.img}
          alt={profile.firstName}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <p><strong>First Name:</strong> {profile.firstName}</p>
        <p><strong>Last Name:</strong> {profile.lastName}</p>
        <p><strong>Country:</strong> {profile.country}</p>
        <p><strong>Type:</strong> {profile.isStudent ? "Student" : "Teacher"}</p>
      </div>
    </div>
  ))}
</div>

  )
}

export default FaceBook