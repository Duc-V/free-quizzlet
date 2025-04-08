import React from 'react';
import styles from "./carousel.module.css";
const Carousel = ({questionsList, index, isFlipped, setIsFlipped}) => {


    return (
        <div className={styles.carousel}>
            <div className={` ${styles.container}`} onClick={setIsFlipped}>
                    <div className={` ${styles.cardContainer} ${isFlipped ? styles.cardFlip : ''}`}>
                        <div className={`${styles.card} ${styles.front}`}>
                            {questionsList[index].question}
                        </div>
                        <div className={`${styles.card} ${styles.back}`}>
                            {questionsList[index].answer}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Carousel;
