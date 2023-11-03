import React, { useState, useTransition } from "react";



function fetchResponsesFromLS(qObj) {
    if (!localStorage.getItem("Discussion-Form")) {
        return [];
    }
    let allQuestions = JSON.parse(localStorage.getItem("Discussion-Form"))
    let questionObj = allQuestions.find((obj) => obj.Heading == qObj.Heading);
    return questionObj.responses;
}



function QuestionAndResponse({ questionArray, index }) {
    const [responseArray, setResponseArray] = useState(fetchResponsesFromLS(questionArray[index]));
    function Question({ heading }) {
        function Heading() {
            return (
                <h1>{heading}</h1>
            )
        }
        function Paragraph({ text }) {
            return (
                <p>{text}</p>
            )
        }
        function ResolveBtn() {
            return (
                <button className="reslove-btn"
                >
                    Resolve
                </button>
            )
        }
        return (
            // the values for heading and Paragraph provided by the props
            <div>
                <h1>Question</h1>
                <Heading heading={questionArray[index].Subject} />
                <Paragraph text={questionArray[index].Question} />
                <ResolveBtn />
            </div>
        )
    }
    function Response() {
        function ResponseTemplate({ Rname, Rcomment }) {
            return (
                <div>
                    <h4>{Rname}</h4>
                    <p>{Rcomment}</p>
                </div>
            )
        }
        return (
            <div>
                <h1>Responses</h1>
                {
                    responseArray.map((response, index) => {
                        return <ResponseTemplate key={index} Rname={response.Name} Rcomment={response.Comment} />
                    })
                }
            </div>
        )
    }

    function AddResponse() {

        const [name, setName] = useState('');
        const [comment, setComment] = useState('');

        function addToResponseArray(newResponse) {
            setResponseArray([...responseArray, newResponse])
        }
        function handleRespondSubmit() {
            let responseObject = {
                Name: name,
                Comment: comment
            }
            addToResponseArray(responseObject);
        }
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
                <div className="submit-btn" onclick={handleRespondSubmit} >
                    Submit
                </div>
            )
        }
        return (
            <div>
                <h1>Add Response</h1>
                <ResponsderName />
                <ResponsderComment />
                <Button />
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