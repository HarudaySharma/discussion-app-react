import './App.css';
import RightPane from './components/App_Components/rightPane';
import LeftPane from './components/App_Components/leftPane';
import React, { useEffect, useState } from 'react';


function fetchFromLocalStorage() {
  return (localStorage.getItem('discussion-app') ? JSON.parse(localStorage.getItem('discussion-app')) : []);
}
function updateLocalStorage(parentArray) {
  localStorage.setItem('discussion-app', JSON.stringify(parentArray));
}


function getSubjectIndex(subject, array) {
  let objIndex = null;
  array.find((obj, index) => {
    if(obj.Subject === subject) {
      objIndex = index;
    }
    return (obj.Subject === subject);
  })
  // console.log(objIndex);
  return objIndex;
}


function addQuestionToLS(subject, question) {
  let parentArray = fetchFromLocalStorage();
  // console.log(parentArray)
  let objIndex = getSubjectIndex(subject, parentArray);
  if(objIndex === null) {
    let Obj = {
      Subject: subject,
      Questions: [{
        question: question, 
        responses: []
      }]
    }
    parentArray.push(Obj);
  }
  else  {
    let ques = {
      question: question,
      responses: []
    }
    parentArray[objIndex].Questions.push(ques);
  }

  updateLocalStorage(parentArray);
}


function App() {
  const [switchComponent, setSwitchComponent] = useState('QF');
  const [parentArray, setParentArray] = useState(fetchFromLocalStorage());

  // will be useful when fetching the responses of the question from local storage
  const [responseKey, setResponseKey] = useState(null);

  useEffect(()=> {
    console.log(responseKey)
  },[responseKey])

// will update local storage every time new wuestion is added
  // useEffect(() => {
  //   updateLocalStorage(questionArray);
  // }, [questionArray])

  const handleQuestionAdd = (subject, question) => {
    addQuestionToLS(subject, question);
    setParentArray(fetchFromLocalStorage());
  }

  const handleQuestionClick = (subject, question) => {
    // console.log(questionHeading)
    setResponseKey({subject: subject, question: question});
    setSwitchComponent('QR');
    // pass this heading to the right pane for fetching the data from local storage
  }

  // will update the parentArray by fetching the updated one from localStorage
  const handleResolveClick = () => {
    setParentArray(fetchFromLocalStorage());
    setSwitchComponent('QF');
  }

  return (
    <div className="App">
      <LeftPane parentArray={parentArray} handleQuestionClick={handleQuestionClick} setSwitchComponent={setSwitchComponent}/>
      <RightPane
        questionAdd={handleQuestionAdd}
        responseKey={responseKey}
        switchComponent={switchComponent}
        setSwitchComponent={setSwitchComponent}
        handleResolveClick={handleResolveClick}
      />
    </div>
  );
}

export default App;


//// question click and response section show
/*
                              app 
      leftpane                                    rightpane

    QuestionList                  QuesitionForm                 ResponsePart


*/
