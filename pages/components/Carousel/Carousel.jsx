import React from 'react';

const Carousel = ({quiz}) => {
    return (
        <div>
            {quiz.id}

            {quiz.questions.map((question) => <div>{question.question}</div>)}
        </div>
    );
};

export default Carousel;
