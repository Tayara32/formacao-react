import React from 'react';
import styles from './DriverCard.module.css';

function DriverCard(props) {

    const { name, rating, img, car } = props;
    const { model, licensePlate } = car;

    const renderStars = () => {
        let stars = [];

        const arredondamento = Math.min(Math.round(rating), 5);   

        // Renderiza até 5 estrelas
        for (let i = 0; i < 5; i++) {
            if (i < arredondamento) {
                stars.push(
                    <span key={i} className={styles.filled}>
                        ★
                    </span>
                );
            } else {
                stars.push(
                    <span key={i} className={styles.empty}>
                        ★
                    </span>
                );
            }
        }
        return stars;
    };

    return (
        <div className={styles.driverCard}>
            <div className={styles.driverImg}>
                <img src={img} alt="perfil" />
            </div>
            <div className={styles.driverInfo}>
                <p><strong>{name}</strong></p>
                <p>{renderStars()}</p>
                <p>{model} - {licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;
