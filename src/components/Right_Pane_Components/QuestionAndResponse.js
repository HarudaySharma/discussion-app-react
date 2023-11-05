import React, { useEffect, useState } from "react";


// will fetch the questionObject from the Local Storage
const fetchObjectFromLS = (qSubject) => {
    if (!localStorage.getItem("discussion-app")) {
        return null;
    }
    let allQuestions = JSON.parse(localStorage.getItem("discussion-app"))
    let questionObj = allQuestions.find((obj) => obj.Subject == qSubject);
    return questionObj;
}


// will update the question object in local storage by  adding the added responses to the questionObject  
function updateObjectInLocalStorage(object) {
    let allQuestions = JSON.parse(localStorage.getItem('discussion-app'))
    let atindex = -1;
    allQuestions.forEach((obj, index) => {
        if(obj.Subject == object.Subject) 
            atindex = index;
    })
    allQuestions.splice(atindex, 1, object);
    localStorage.setItem('discussion-app', JSON.stringify(allQuestions));
}


function QuestionAndResponse({ qSubject, setSwitchComponent }) {
    
    const [questionObject, setQuestionObject] = useState(() => fetchObjectFromLS(qSubject));
    const [responses, setResponses]  = useState(() => fetchResponseArray(questionObject));

    const [prevQSubject, setPreviousQSubject] = useState(null)
    // will fetch all the responses from the questionObject
    function fetchResponseArray () {
        console.log('fetchResponserender')
        return (questionObject.hasOwnProperty('responseArray') ? questionObject.responseArray : [])
    }

    useEffect(() => {
        setQuestionObject(fetchObjectFromLS(qSubject));
    }, [qSubject])

    useEffect(() => {
        if(qSubject !== prevQSubject) {
            setResponses(fetchResponseArray(questionObject));
            setPreviousQSubject(qSubject);
        }
        updateObjectInLocalStorage(questionObject);
    }, [questionObject]);


    function Question() {

        function Heading({ heading }) {
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
                <button 
                    className="reslove-btn"
                    onClick={()=> setSwitchComponent('QF')}
                >
                    Resolve
                </button>
            )
        }
        return (
            // the values for heading and Paragraph provided by the props
            <div>
                <h1>Question</h1>
                <Heading heading={questionObject.Subject} />
                <Paragraph text={questionObject.Question} />
                <ResolveBtn />
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
            if(name == '' || comment == '') return;

            let newResponse = {
                Name: name,
                Comment: comment
            }
            setResponses([...responses, newResponse]);

            // to add new responses to the question object
            setQuestionObject({...questionObject, responseArray: [...responses, newResponse]});

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


