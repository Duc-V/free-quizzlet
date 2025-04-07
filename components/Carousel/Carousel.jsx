import React from 'react';
import styles from "./carousel.module.css";
const Carousel = ({questionsList, index, isFlipped, setIsFlipped}) => {


    return (
        <div className={styles.container}>
            <div className={` ${styles.carousel} ${isFlipped ? styles.cardFlip : ''}`} onClick={setIsFlipped}>
                    <div className={`${styles.card} ${styles.front}`}>
                        {questionsList[index].question}
                    </div>

                    <div className={`${styles.card} ${styles.back}`}>
                        {questionsList[index].answer}
                    </div>
            </div>
        </div>
    );
};

export default Carousel;
