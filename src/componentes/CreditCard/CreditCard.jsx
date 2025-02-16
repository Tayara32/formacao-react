import React from "react";
import styles from "./CreditCard.module.css";

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  let imgSrc;

  if (type == "Visa") {
    imgSrc = "./img/visa.png";
  } else if (type == "Master Card") {
    imgSrc = "./img/master-card.svg";
  }

  const cardStyles = {
    backgroundColor: bgColor,
    color: color,
  };

  const hashDigits = (digits) => {
    const last4Digits = digits.slice(-4);
    const result = `**** **** **** ${last4Digits}`;
    return result;
  };

  const wholeDate = () => {
    const year = expirationYear % 1000;
    const month =
      expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;

    return month + "/" + year;
  };

  return (
   
    <div style={cardStyles} className={styles.creditCard}>
      <div className={styles.header}>
        <img src={imgSrc} />
      </div>
      <div className={styles.number}>{hashDigits(number)}</div>
      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.expires}>Expires {wholeDate()}</div>
          <div className={styles.bank}>{bank}</div>
        </div>
        <div className={styles.bottom}>
            <div >{owner}</div>
        </div>
      </div>
    </div>
 
  );
}

export default CreditCard;
