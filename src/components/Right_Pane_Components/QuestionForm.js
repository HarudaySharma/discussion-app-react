import React, { useState } from "react";


function QuestionForm({ handleQuestionAdd, setSwitchComponent }) {
    function Heading() {
        return (
            <div className="heading">
                <h1>Welcome to Discussion Portal !</h1>
                <h4>Enter a subject and question to get started</h4>
            </div>
        )
    }
    function SubjectInput() {

        const [subject, setSubject] = useState('');
        const [question, setQuestion] = useState('');


        function onButtonCLick() {
            // const newQuestion = {
            //     Subject: subject,
            //     Question: question
            // }
            handleQuestionAdd(subject, question);
        }
        return (
            <div className="subject-input">
                <input type="text"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                />

                <textarea
                    placeholder="Question"
                    className=""
                    onChange={(e) => setQuestion(e.target.value)}
                >
                </textarea>
                <button type="button" className="submit-btn buttons" onClick={onButtonCLick}>
                    Submit
                </button>
            </div>
        )
    }
    return (
        <div className="question-form">
            {/* {} */}
            <Heading />
            <SubjectInput />
        </div>
    )
}
export default QuestionForm;