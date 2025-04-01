import React from 'react';

const MyComponent = ({question, setQuestion, setAnswer}) => {
    return (
        <div>
            <div>
                <label>
                    Question:
                    <input
                        type="text"
                        value={question?.question || ''}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Enter your question"
                    />
                </label>
            </div>
            <div>
                <label>
                    Answer:
                    <input
                        type="text"
                        value={question?.answer || ''}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Enter your answer"
                    />
                </label>
            </div>
        </div>
    );
};

export default MyComponent;
