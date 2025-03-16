import React from 'react';
import useStore from "@/pages/hooks/useStore";
import DeckCard from "@/pages/components/DeckCard/DeckCard";
import Link from 'next/link';
import styles from "./Deck.module.css"
const Deck = () => {

    const store = useStore();

    if(!store) return <p>loading</p>;

    const {quizzes} = store;

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
