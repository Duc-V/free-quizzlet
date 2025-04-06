import React from 'react';
import styles from './DeckCard.module.css'
import useStore from "@/hooks/useStore"
import Link from 'next/link';
import { useRouter } from 'next/router';
const DeckCard = ({quiz}) => {

    const {removeQuiz} = useStore();
    const router = useRouter();

    const rmQuiz = (id) => (event) => {
        event.stopPropagation(); // Prevents the event from reaching the parent
        event.preventDefault();
        removeQuiz(id);
    };

    const goToEdit = (event) => {
        event.stopPropagation();
        event.preventDefault();
        router.push({
            pathname: '/pages/edit/[slug]',
            query: { slug: quiz.id },
        });
    };



    return (
        <div className={styles.deckcard}>
            <Link href={{
                pathname: 'pages/card/[slug]',
                query: { slug: quiz.id },
            }}>
                <div>
                    {quiz.name ? quiz.name : "unnamed quiz"}
                </div>

                <span onClick={rmQuiz(quiz.id)}>
                delete card
                </span>

                <div onClick={goToEdit}>
                    edit
                </div>
            </Link>
        </div>
    );
};

export default DeckCard;
