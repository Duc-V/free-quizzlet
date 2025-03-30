import React from 'react';
import { useRouter } from 'next/router';
import Carousel from '../../components/Carousel/Carousel'
import useStore from '../../hooks/useStore';
import { useEffect, useState } from 'react';
const Id = () => {
    const router = useRouter();
    const { getQuiz } = useStore();
    const { id } = router.query;

    // Use state to handle quiz loading
    const [quiz, setQuiz] = useState(null);

    // Fetch quiz when id changes
    useEffect(() => {
        if (id) {
            const fetchedQuiz = getQuiz(id);
            console.log('ID:', id);
            console.log('Fetched Quiz:', fetchedQuiz);
            setQuiz(fetchedQuiz);
        }
    }, [id, getQuiz]);

    // Show loading state while quiz is being fetched
    if (!router.isReady) {
        return <div>Loading...</div>;
    }

    // Handle case where quiz is not found
    if (!quiz) {
        return <div>No quiz found for ID: {id}</div>;
    }

    return (
        <div>
            <Carousel quiz={quiz} />
        </div>
    );
};

export default Id;
