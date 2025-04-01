import React from 'react';
import {useState} from 'react';
import useStore from '@/hooks/useStore'
import FlashCard from '@/components/FlashCard/FlashCard'
import useFlashCards from '@/hooks/useFlashCards'
import Link from 'next/link'
const CreateCard = () => {
    const store = useStore();
    if(!store) return <p>loading</p>;

    const [nameAndDescription, setNameAndDescription] = useState({name:'',description:''});

    const {addQuiz} = store;

    const {questions, handleChange, addNewCard, deleteCard} = useFlashCards();

    const updateQuizzName = (name) => {
        setNameAndDescription(prev => ({...prev, name: name}))
    }

    const updateDescription = (description) => {
        setNameAndDescription(prev => ({...prev, description: description}))
    }

    const saveQuiz = () =>{
        addQuiz(
            {
                "id": Date.now(),
                "name": nameAndDescription.name,
                "description": nameAndDescription.description,
                "questions": questions,
            }
        )
    }

    return (
        <div>
            <div>
                <label htmlFor="quiz name">
                    quiz name
                </label>
                <input
                    type="text"
                    id="name"
                    value={nameAndDescription.name}
                    onChange={(e) => {e.preventDefault(); updateQuizzName(e.target.value);}}
                    placeholder="My Quiz"
                />
            </div>

            <div>
                <label htmlFor="description">
                    description
                </label>
                <input
                    type="text"
                    id="name"
                    value={nameAndDescription.description}
                    onChange={(e) => {e.preventDefault(); updateDescription(e.target.value);}}
                    placeholder="My Quiz"
                />
            </div>

            {
                questions.map((question, index) => (
                    <FlashCard key={index} question={question} handleChange={handleChange} deleteCard={deleteCard}/>
                ))
            }

            <div onClick={addNewCard}>
                add
            </div>

            <Link href={
                {pathname: '/'}
            }>
                <div onClick={saveQuiz}>
                    save
                </div>
            </Link>
        </div>
    );
};

export default CreateCard;
