import React from 'react';
import {useState} from 'react'
import button from "@/components/Button/Button";
const Carousel = ({quiz}) => {

    const questionsList = quiz.questions;

    const [index,setIndex] = useState(0);

    const indexIncrement = () => {
        setIndex((prevIndex) => (prevIndex + 1) % questionsList.length);
    }

    const indexDecrement = () => {
        setIndex((prevIndex) => (prevIndex - 1 + questionsList.length) % questionsList.length);
    };


    return (
        <div>
            <div>
                {questionsList[index].question}
            </div>
            <div>
                {questionsList[index].answer}
            </div>
            <div>
                <button onClick={indexIncrement}>
                    next question
                </button>
            </div>
            <div>
                <button onClick={indexDecrement}>
                    previous question
                </button>
            </div>
        </div>
    );
};

export default Carousel;
