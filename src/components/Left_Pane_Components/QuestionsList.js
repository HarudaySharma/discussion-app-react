import React, { useState } from "react";


function QuestionsList({ filteredArray, handleQuestionClick }) {

    function QuestionTemplate({ subject, question }) {

        return (
            <li className="subject-items question" 
            onClick={() => handleQuestionClick(subject, question)}>
               {question} 
            </li>
        )
    }
    function SubjectTemplate({ subjectObj }) {
        return (
            <div className="subject-container subjects">
                <h2>{subjectObj.Subject}</h2>
                <div className="question-list questions">
                {
                    subjectObj.Questions.map((obj, index) => {
                        return <QuestionTemplate key={index} subject={subjectObj.Subject} question={obj.question} />
                    })
                }
                </div>
            </div>
        )
    }
    return (
        <div className="subject-list">
            {
                filteredArray.map((obj, index) => {
                    return <SubjectTemplate key={index} subjectObj={obj} />
                })
                // questionArray.map((object, index) => {
                //     return <QuestionTemplate key={index} title={object.Subject} content={object.Question} />
                // })
            }
        </div>
    )
}

export default QuestionsList;