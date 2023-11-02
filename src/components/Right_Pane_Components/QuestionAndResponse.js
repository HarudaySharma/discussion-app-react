import React, { useState } from "react";

function QuestionAndResponse(props) {
    function Question(props) {
        function Heading() {
            return (
                <h1>{props.questionHeading}questionHeading</h1>
            )
        }
        function Paragraph() {
            return (
                <p>{props.questionText}questionText</p>
            )
        }
        function ResolveBtn() {
            return (
                <button className="reslove-btn"
                    // onClick
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
        function Button() {
            return (
                // onclick 
                <div className="submit-btn">
                    Submit
                </div>
            )
        }
        return (
            <div>
                <h1>Add Response</h1>
                <ResponsderName />
                <ResponsderComment />
                <Button/>
            </div>
        )
    }
    return (
        <div className="question-and-response">
            <Question />
            <Response />
            <AddResponse />
        </div>
    )
}

export default QuestionAndResponse;