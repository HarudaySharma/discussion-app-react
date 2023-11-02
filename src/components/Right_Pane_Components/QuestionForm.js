import React, { useState } from "react";

function QuestionForm() {
    function questionAdd() { }
    function Heading() {
        return (
            <div className="heading">
                <h1>Welcome to Discussion Portal !</h1>
                <h4>Enter a subject and question to get started</h4>
            </div>
        )
    }
    function SubjectInput() {
        // using hooks
        const { subject, setSubject } = useState("");
        const { question, setQuestion } = useState("");

        return (
            <div className="subject-input">
                <input type="text"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                >
                </input>

                <textarea
                    placeholder="Question"
                    className=""
                    onChange={(e) => setQuestion(e.target.value)}
                >
                </textarea>
            </div>
        )
    }
    function Button() {
        return (
            <div className="submit-btn" onClick={questionAdd}>
                Submit
            </div>
        )
    }

    return (
        <div className="question-form">
            <Heading />
            <SubjectInput />
            <Button />
        </div>
    )
}
export default QuestionForm;