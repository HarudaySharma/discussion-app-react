import React, { useState } from "react";


function QuestionsList({ questionArray, handleQuestionClick }) {

    function QuestionTemplate(props) {

        return (
            <div onClick={() => handleQuestionClick(props.title)}>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
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