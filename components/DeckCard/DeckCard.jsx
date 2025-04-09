import React, {useState} from 'react';
import styles from './DeckCard.module.css'
import useStore from "@/hooks/useStore"
import Link from 'next/link';
import { useRouter } from 'next/router';
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
        <div >
            <Link href={{
                pathname: 'pages/card/[slug]',
                query: { slug: quiz.id },

            }}className={styles.deckcard}>
                <div className={styles.icon}>
                    <DescriptionIcon
                        sx={{ fontSize: 35 }}
                    />
                </div>

                {/*quiz name*/}
                <div>
                    <div className={styles.name}>
                        {quiz.name ? quiz.name : "unnamed quiz"}
                    </div>

                    <div>
                        Flashcard set - {quiz.questions.length} items
                    </div>
                </div>

                <div className={styles.util}>
                   <span onClick={rmQuiz(quiz.id)}>
                            <DeleteIcon/>
                    </span>
                    <span onClick={goToEdit}>
                            <EditIcon/>
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default DeckCard;
