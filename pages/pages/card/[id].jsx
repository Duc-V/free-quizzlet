import React, {useCallback} from 'react';
import { useRouter } from 'next/router';
import Carousel from '@/components/Carousel/Carousel'
import useStore from '@/hooks/useStore';
import { useEffect, useState, useMemo } from 'react';
import styles from './card.module.css'
import button from "@/components/Button/Button";
const Id = () => {
    const router = useRouter();
    const { getQuiz } = useStore();
    const { id } = router.query;

    const [isFlipped, setIsFlipped] = useState(false);

    // Use state to handle quiz loading
    const [quiz, setQuiz] = useState(null);
    const [index,setIndex] = useState(0);
    // Fetch quiz when id changes
    useEffect(() => {
        if (id) {
            const fetchedQuiz = getQuiz(id);
            setQuiz(fetchedQuiz);
        }
    }, [id, getQuiz]);

    const questionsList = useMemo(() => quiz?.questions ?? [], [quiz]);

    const updateIndex = useCallback((delta) => {
        if (questionsList.length === 0) return;
        setIndex((prev) => (prev + delta + questionsList.length) % questionsList.length);
    }, [questionsList])


    // Show loading state while quiz is being fetched
    if (!router.isReady) {
        return <div>Loading...</div>;
    }

    // Handle case where quiz is not found
    if (!quiz) {
        return <div>No quiz found for ID: {id}</div>;
    }


    const indexIncrement = () => updateIndex(1);
    const indexDecrement = () => updateIndex(-1);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    }


    return (
        <div className={styles.carousel}>
            <div>{quiz.name}</div>
            {questionsList.length > 0 ? (
                <>
                    <Carousel questionsList={questionsList} index={index} isFlipped={isFlipped} setIsFlipped={handleCardClick} />
                    <div>
                        <button onClick={() => {indexIncrement(); setIsFlipped(false);}}>next</button>
                    </div>
                    <div>
                        <button onClick={() => {indexDecrement(); setIsFlipped(false)}}>previous</button>
                    </div>
                </>
            ) : (
                <div>No questions available in this quiz.</div>
            )}
        </div>
    );
};

export default Id;
