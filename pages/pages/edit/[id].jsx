import React, {useState, useEffect} from 'react';
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


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    const handleNameChange = (name) => {
        setName(name);
    }

    const handleDescriptionChange = (description) => {
        setDescription(description);
    }


    // When quiz is loaded, update the state
    useEffect(() => {
        if (quiz?.name) setName(quiz.name);
        if (quiz?.description) setDescription(quiz.description);
    }, [quiz]);


    const updateQuiz = () => {
        editQuiz({
            "id" : quiz.id,
            "name" : name,
            "description" : description,
            questions: questions,
        })
    }

    return (

            <div>

                <div>
                    <label htmlFor="name">
                        quiz name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => handleNameChange(e.target.value)}
                        placeholder="Unnamed"
                    />
                </div>

                <div>
                    <label htmlFor="description">
                        quiz description
                    </label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => handleDescriptionChange(e.target.value)}
                        placeholder="No description"
                    />
                </div>


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
