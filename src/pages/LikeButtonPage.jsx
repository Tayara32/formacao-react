import React from 'react'
import styles from "../componentes/LikeButton/LikeButton.module.css";
import LikeButton from "../componentes/LikeButton/LikeButton";

function LikeButtonPage() {
  return (
    <div>

<h2>LikeButton</h2>
      <div className={styles.container}>
        <LikeButton />
        <LikeButton />
      </div>
    </div>
  )
}

export default LikeButtonPage