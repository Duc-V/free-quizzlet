import {useState, useEffect} from "react";
import FlashCard from "@/pages/components/FlashCard/FlashCard";

const useFlashCards = (questionList) => {
    const [questions, setQuestions] = useState(questionList || []);

    useEffect(() => {
        if (questionList?.length > 0) {
            setQuestions(questionList);
        }
    }, [questionList]);

    const handleChange = (id, field, value) => {
        setQuestions((
            currentQuestions) =>
                currentQuestions.map((question) =>
                    question.id === id ? {...question, [field]: value } : question
                )
        );
    }

    const addNewCard = () => {
        setQuestions((currentQuestions) => [
            ...currentQuestions,
            {id:Date.now().toString(), question: '', answer: ''},
        ])
    }

    const deleteCard = (id) => {
        setQuestions((currentQuestions) =>
            currentQuestions.filter((question) => question.id !== id)
        );
    };




    return {questions, handleChange, addNewCard, deleteCard}
}


export default useFlashCards;