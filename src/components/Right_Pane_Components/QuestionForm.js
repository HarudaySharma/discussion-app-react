import React, { useState } from "react";

function QuestionForm() {
    function questionAdd() { }
    function Heading() {
        return (
            <div>
                <h1>Welcome to Discussion Portal !</h1>
                <h6>Enter a subject and question to get started</h6>
            </div>
        )
    }
    function SubjectInput() {
        // using hooks
        const { subject, setSubject } = useState("");
        const { question, setQuestion } = useState("");

        return (
            <div>
                <input type="text"
                    placeholder="subject"
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
            <button type="button" onClick={questionAdd}>Submit</button>
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