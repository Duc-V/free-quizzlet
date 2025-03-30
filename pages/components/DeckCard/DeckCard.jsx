import React from 'react';
import styles from './DeckCard.module.css'
import useFlashCards from "@/pages/hooks/useFlashCards";
import useStore from "@/pages/hooks/useStore"
const DeckCard = ({quiz}) => {

    const {removeQuiz} = useStore();

    const rmQuiz = (id) => (event) => {
        event.stopPropagation(); // Prevents the event from reaching the parent
        event.preventDefault();
        removeQuiz(id);
    };


    return (
        <div className={styles.deckcard}>
            <div>
                {quiz.name}
            </div>
            <button onClick={rmQuiz(quiz.id)}>
                delete card
            </button>
        </div>
    );
};

export default DeckCard;
