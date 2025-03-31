import React from 'react';
import {useRouter} from "next/router";
import useStore from "@/pages/hooks/useStore";
import useFlashCards from "@/pages/hooks/useFlashCards";
import FlashCard from "@/pages/components/FlashCard/FlashCard";
const MyComponent = () => {
    const router = useRouter();
    const { id } = router.query;

    const {getQuiz, editQuiz} = useStore()



    const quiz = getQuiz(id) || [];

    const {questions, handleChange, addNewCard, deleteCard} = useFlashCards(quiz.questions);

    console.log(questions);

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

                <div onClick={updateQuiz}>
                    Update quiz
                </div>
            </div>
    );
};

export default MyComponent;
