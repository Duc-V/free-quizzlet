import React from 'react';
import {useState} from 'react'
import button from "@/components/Button/Button";
import styles from "./carousel.module.css";
const Carousel = ({questionsList, index, isFlipped, setIsFlipped}) => {


    return (
        <div className={styles.container}>
            <div className={styles.carousel} onClick={setIsFlipped}>

                {isFlipped ?
                    <div className={styles.card}>
                        {questionsList[index].question}
                    </div>
                    :
                    <div className={styles.card}>
                        {questionsList[index].answer}
                    </div>
                }
            </div>
        </div>
    );
};

export default Carousel;
