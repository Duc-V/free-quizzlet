import React from 'react';
import {useRouter} from "next/router";
import useStore from "@/hooks/useStore";
import useFlashCards from "@/hooks/useFlashCards";
import FlashCard from "@/components/FlashCard/FlashCard";
const MyComponent = () => {
    const router = useRouter();
    const { id } = router.query;

    const {getQuiz, editQuiz} = useStore()

    // get the current quiz (set of questions)
    const quiz = getQuiz(id) || [];

    // useFlashCard is used to manipulate the quiz data
    const {questions, handleChange, addNewCard, deleteCard} = useFlashCards(quiz.questions);

    if (!id || !questions) return <p>Loading...</p>;


    const updateQuiz = () => {
        editQuiz({
            "id" : quiz.id,
            "name" : quiz.name,
            "description" : quiz.description,
            questions: questions,
        })
    }

    return (
            <div>
                {
                    questions.map((question, index) => (
                        <FlashCard key={index} question={question} handleChange={handleChange} deleteCard={deleteCard}/>
                    ))
                }

                <div onClick={addNewCard}>
                    Add question
                </div>
                <div onClick={updateQuiz}>
                    Update quiz
                </div>
            </div>
    );
};

export default MyComponent;
