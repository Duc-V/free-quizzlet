import React from 'react';
import styles from './DeckCard.module.css'
import Link from 'next/link';

const DeckCard = ({quiz}) => {
    return (
        <div className={styles.deckcard}>
            {quiz.name}
        </div>
    );
};

export default DeckCard;
