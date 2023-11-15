import React, { useEffect, useState } from "react";


// will fetch the questionObject from the Local Storage
const getQuestionObject = (key, parentArray) => {
    if (!localStorage.getItem("discussion-app")) {
        return null;
    }

    //finding the subject Object which contains all the questions regarding the subject
    let subIndex = parentArray.findIndex((obj) => {
        return (obj.Subject === key.subject);
    });
    let subjectObj = parentArray[subIndex];
    // questionArray traversal to find the question 

    let questionIndex = subjectObj.Questions.findIndex((obj) => obj.question === key.question)

    let questionObj = subjectObj.Questions[questionIndex];
    // this will return the questionObj which will have the responses (question and responses)

    return questionObj;
}

// will fetch all the responses from the questionObject
function getResponseArray(questionObject) {
    // console.log('fetchResponserender')
    return (questionObject.hasOwnProperty('responses') ? questionObject.responses : [])
}


//responseKey = {subject, question}
function QuestionAndResponse({ parentArray, handleResponseAdd, responseKey, handleResolveClick }) {

    // questionObject = { question,  responses[]}
    const [questionObject, setQuestionObject] = useState(() => getQuestionObject(responseKey, parentArray));


    const [responses, setResponses] = useState(() => getResponseArray(questionObject));

    // will be used to fetch new responses when response Key changes 
    const [prevResponseKey, setPreviousResponseKey] = useState(null)



    useEffect(() => {
        if(prevResponseKey === null) {
            handleResponseAdd(responseKey.subject, questionObject)
            // updateObjectInLocalStorage(responseKey.subject,questionObject, parentArray, setParentArray);
        }
        else {
            console.log("handleResponseAdd called after question switching")
            handleResponseAdd(prevResponseKey.subject, questionObject)
            // updateObjectInLocalStorage(prevResponseKey.subject,questionObject, parentArray, setParentArray);
        }
        setQuestionObject(getQuestionObject(responseKey, parentArray));
    }, [responseKey])

    useEffect(() => {
        if (responseKey !== prevResponseKey) {
            setResponses(getResponseArray(questionObject));
            setPreviousResponseKey(responseKey);
        }
    }, [questionObject]);


    function Question() {
        function onResolve() {
            // deleteObjectInLocalStorage(responseKey.subject, questionObject.question);
            handleResolveClick(responseKey.subject, questionObject.question);
        }
        return (
            // the values for heading and Paragraph provided by the props
            <div className="question-resolve-container">
                <h1>{responseKey.subject}</h1>
                <p>{questionObject.question}</p>
                <button
                    className="resolve-btn buttons"
                    onClick={onResolve}
                >
                    Resolve
                </button>
            </div>
        )
    }
    function Response() {

        function ResponseTemplate(props) {
            return (
                <div className="response">
                    <h4>{props.name}</h4>
                    <p>{props.comment}</p>
                </div>
            )
        }
        return (
            <div className="response-container">
                <h1>Responses</h1>
                <div className="response-list">
                    {responses.length == 0 && <div>No Responses</div>}
                    {
                        responses.map((response, index) => {
                            return <ResponseTemplate key={index} name={response.Name} comment={response.Comment} />
                        }
                        )
                    }
                </div>
            </div>
        )
    }

    function AddResponse() {

        const [name, setName] = useState('');
        const [comment, setComment] = useState('');

        const handleRespondSubmit = () => {
            if (name == '' || comment == '') return;

            let newResponse = {
                Name: name,
                Comment: comment
            }
            setResponses([...responses, newResponse]);

            // to add new responses to the question object
            // questionObject = {
            //     question:
            //     responses: []
            // }
            // added the new response in the response array of the question
            setQuestionObject({ ...questionObject, responses: [...responses, newResponse] });

            setName('');
            setComment('');
        }
        // useEffect(() => {
        //     setQuestionObject(() => {
        //         return {...questionObject, responseArray: responses}
        //     })
        // }, [responses])

        // will get executed everytime the questionObject is changed (new responses are added to the object)


        return (
            <div className="add-response-container">
                <h1>Add Response</h1>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required="required"
                />
                <textarea
                    placeholder="Enter Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required="required"
                >
                </textarea>
                <button className="submit-btn buttons" onClick={handleRespondSubmit} >
                    Submit
                </button>
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


