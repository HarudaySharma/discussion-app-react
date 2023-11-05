import React, { useState } from "react";


function QuestionForm({ questionAdd, setSwitchComponent }) {
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


        function handleQuestionAdd() {
            // const newQuestion = {
            //     Subject: subject,
            //     Question: question
            // }
            questionAdd(subject, question);
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
                <div className="submit-btn" onClick={handleQuestionAdd}>
                    Submit
                </div>
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