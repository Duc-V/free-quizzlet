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

    const {questions, handleChange, addNewCard, deleteCard} = useFlashCards();

    return (
            <div className={styles.deck}>
                <div className={styles.container}>


                    {quizzes.map( (quiz) => (

                        <Link href={{
                            pathname: 'pages/card/[slug]',
                            query: { slug: quiz.id },
                        }}>
                            <DeckCard key={quiz.id} quiz={quiz}/>
                        </Link>
                    ))}
                </div>
            </div>
    );
};

export default Deck;
