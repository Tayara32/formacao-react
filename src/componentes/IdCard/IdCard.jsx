import React from "react";
import styles from "./IdCard.module.css";

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;

  return (
    <div className={styles.idcard}>
      <img src={picture} alt="profile" />
      <div className={styles.cardinfo}>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {(height/100).toFixed(2)}m</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
