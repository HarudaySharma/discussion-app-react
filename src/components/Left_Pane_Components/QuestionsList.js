import React, { useState } from "react";


function QuestionsList({ questionArray, handleQuestionClick}) {

    function QuestionTemplate({ title, content }) {
        
        return (
            <div onClick={() => handleQuestionClick(title)}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        )
    }

    return (
        <div className="background-gray">
            {
                questionArray.map((object, index) => {
                    return <QuestionTemplate key={index} title={object.Subject} content={object.Question} />
                })
            }
        </div>
    )
}

export default QuestionsList;