// import React from "react";


function QuestionsList({ filteredArray, handleQuestionClick }) {
    const array = filteredArray;

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
                array.map((obj, index) => {
                    return <SubjectTemplate key={index} subjectObj={obj} />
                })
            }
        </div>
    )
}

export default QuestionsList;