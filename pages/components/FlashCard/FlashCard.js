import React from 'react';

const FlashCard = ({ question, handleChange, deleteCard}) => {
    return (
        <div>

            <div>
                <label htmlFor="question">
                    question
                </label>
                <input
                    type="text"
                    id="question"
                    value={question.question}
                    onChange={(e) => handleChange(question.id, "question", e.target.value)}
                    placeholder="Questions"
                />
            </div>
            <div>
                <label htmlFor="answer">
                    answer
                </label>
                <input
                    type="text"
                    id="answer"
                    value={question.answer}
                    onChange={(e) => handleChange(question.id, "answer", e.target.value)}
                    placeholder="Answer"
                />
            </div>
            <div onClick={ (e) => {e.preventDefault(); deleteCard(question.id);}}>
                delete card
            </div>
        </div>
    );
};

export default FlashCard;
