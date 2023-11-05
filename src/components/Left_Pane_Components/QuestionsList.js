import React, { useState } from "react";


function QuestionsList({ parentArray, handleQuestionClick }) {

    function QuestionTemplate({ subject, question }) {

        return (
            <div onClick={() => {
                // console.log(question);
                handleQuestionClick(subject, question)
            }}>
               {question} 
            </div>
        )
    }
    function SubjectTemplate({ subjectObj }) {
        return (
            <div>
                <h2>{subjectObj.Subject}</h2>
                {
                    subjectObj.Questions.map((obj, index) => {
                        return <QuestionTemplate key={index} subject={subjectObj.Subject} question={obj.question} />
                    })
                }
            </div>
        )
    }
    return (
        <div className="background-gray">
            {
                parentArray.map((obj, index) => {
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