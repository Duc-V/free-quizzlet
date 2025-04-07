import React from 'react';
import useStore from "@/hooks/useStore";
import DeckCard from "@/components/DeckCard/DeckCard";
import Link from 'next/link';
import styles from "./Deck.module.css"
import useFlashCards from "@/hooks/useFlashCards";
const Deck = () => {

    const store = useStore();

    if(!store) return <p>loading</p>;

    const {quizzes} = store;


    return (
            <div className={styles.deck}>
                <div className={styles.container}>

                    {quizzes.map( (quiz) => (
                        <DeckCard key={quiz.id} quiz={quiz} />
                    ))}
                </div>
            </div>
    );
};

export default Deck;
