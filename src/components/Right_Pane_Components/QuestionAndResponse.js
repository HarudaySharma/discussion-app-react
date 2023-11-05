import React, { useEffect, useState } from "react";


// will fetch the questionObject from the Local Storage
const fetchObjectFromLS = (key) => {
    if (!localStorage.getItem("discussion-app")) {
        return null;
    }
    let parentArray = JSON.parse(localStorage.getItem("discussion-app"))

    //finding the subject Object which contains all the questions regarding the subject
    let subIndex = parentArray.findIndex((obj) =>  {
        return (obj.Subject === key.subject);
    });
    let subjectObj = parentArray[subIndex];
    // questionArray traversal to find the question 

    let questionIndex = subjectObj.Questions.findIndex((obj) => obj.question === key.question)
    
    let questionObj = subjectObj.Questions[questionIndex];
    // this will return the questionObj which will have the responses (question and responses)

    return questionObj;
}


// will update the question object in local storage by  adding the added responses to the questionObject  
function updateObjectInLocalStorage(subject , questionObject) {
    let parentArray = JSON.parse(localStorage.getItem('discussion-app'))

    let subIndex = parentArray.findIndex((obj) => {
        return (obj.Subject === subject);
    });
    let SubjectObj = parentArray[subIndex];


    // finding the QuestionObject
    let questionIndex = SubjectObj.Questions.findIndex((obj) => {
        return (obj.question === questionObject.question)
    });

    // will update the Questions array in the SubjectObj (new QuestionAdded into the Questions
    // removing the old)
    SubjectObj.Questions.splice(questionIndex, 1, questionObject);

    // updating the SubjectObject in the parentArray
    parentArray.splice(subIndex, 1, SubjectObj);

    localStorage.setItem('discussion-app', JSON.stringify(parentArray));
}


//responseKey = {subject, question}
function QuestionAndResponse({ responseKey, setSwitchComponent }) {

    // questionObject = { question,  responses[]}
    const [questionObject, setQuestionObject] = useState(() => fetchObjectFromLS(responseKey));


    const [responses, setResponses] = useState(() => fetchResponseArray(questionObject));

    // will be used to fetch new responses when response Key changes 
    const [prevResponseKey, setPreviousResponseKey] = useState(null)

    // will fetch all the responses from the questionObject
    function fetchResponseArray() {
        // console.log('fetchResponserender')
        return (questionObject.hasOwnProperty('responses') ? questionObject.responses : [])
    }

    useEffect(() => {
        setQuestionObject(fetchObjectFromLS(responseKey));
    }, [responseKey])

    useEffect(() => {
        if (responseKey !== prevResponseKey) {
            setResponses(fetchResponseArray(questionObject));
            setPreviousResponseKey(responseKey);
        }
        updateObjectInLocalStorage(responseKey.subject, questionObject);
    }, [questionObject]);


    function Question() {
        return (
            // the values for heading and Paragraph provided by the props
            <div>
                <h1>{responseKey.subject}</h1>
                <p>{questionObject.question}</p>
                <button
                    className="resolve-btn"
                    onClick={() => setSwitchComponent('QF')}
                >
                    Resolve
                </button>
            </div>
        )
    }
    function Response() {

        function ResponseTemplate(props) {
            return (
                <div>
                    <h4>{props.name}</h4>
                    <p>{props.comment}</p>
                </div>
            )
        }
        return (
            <div>
                <h1>Responses</h1>
                {
                    responses.map((response, index) => {
                        return <ResponseTemplate key={index} name={response.Name} comment={response.Comment} />
                    }
                    )
                }
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
            <div>
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
                <button className="submit-btn" onClick={handleRespondSubmit} >
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

