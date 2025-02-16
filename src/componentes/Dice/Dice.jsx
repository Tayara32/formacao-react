import React from "react";
import styles from "./Dice.module.css";
import { useState } from "react";

function Dice() {
  const [diceImg, setDiceImg] = useState(`/images/dice-empty.png`);
  const [isRolling, setIsRolling] = useState(false);

  const handleClick = () => {
    setIsRolling(true);
    setDiceImg("/images/dice-empty.png");

    setTimeout(() => {
        const numAleatorio = Math.floor(Math.random() * 6) + 1;
        setDiceImg(`/images/dice${numAleatorio}.png`);
        setIsRolling(false);
      }, 1000);
  };

  return (
    <div className={styles.diceContainer}>
      <img
        className={styles.dice}
        src={diceImg}
        alt="dice"
        onClick={handleClick}
        style={{ cursor: "pointer" }} 
      />
    </div>
  );
}

export default Dice;
