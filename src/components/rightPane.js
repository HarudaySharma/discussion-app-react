import React, { useState } from "react";
function RightPane() {
    return (
        <div className="right-pane">
            <QuestionForm />
        </div>
    )
}
function QuestionAndResponse(props) {
    function Question(props) {
        function Heading() {
            return (
                <h1>{props.questionHeading}</h1>
            )
        }
        function Paragraph() {
            return (
                <p>{props.questionText}</p>
            )
        }
        function ResolveBtn() {
            return (
                <button
                    onClick={"hello"}
                >
                    Resolve
                </button>
            )
        }
        return (
            // the values for heading and Paragraph provided by the props
            <div>
                <h1>Question</h1>
                <Heading heading={props.questionHeading} />
                <Paragraph text={props.questionText} />
                <ResolveBtn />
            </div>
        )
    }
    function Response(responses) {

        return (
            <div>
                <h1>Resonse</h1>
                <p>
                    Will contain all the responses of that question
                    Name : responses.name
                    Response : responses.comment
                </p>
            </div>
        )
    }
    function AddResponse() {
        const { name, setName } = useState('');
        const { comment, setComment } = useState('');
        function ResponsderName() {
            return (
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                >
                </input>
            )
        }
        function ResponsderComment() {
            return (
                <textarea
                    placeholder="Enter Comment"
                    onChange={(e) => setComment(e.target.value)}
                >
                </textarea>
            )
        }
        return (
            <div>
                <h1>Add Response</h1>
                <ResponsderName />
                <ResponsderComment />
            </div>
        )
    }
    return (
        <div>
            <Question />
            <Response />
            <AddResponse />
        </div>
    )
}

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

export default RightPane;