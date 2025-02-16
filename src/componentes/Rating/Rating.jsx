import React from 'react'
import styles from './Rating.module.css'

function Rating(props) {
    const { children } = props

    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
          stars.push(
            <span key={i} className={i < children ? styles.filled : styles.empty}>
              ★
            </span>
          );
        }
        return stars;
      };

    return (
        <div className={styles.rating}>{renderStars()}</div>
    )
}

export default Rating