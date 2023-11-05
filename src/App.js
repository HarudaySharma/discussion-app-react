import logo from './logo.svg';
import './App.css';
import RightPane from './components/App_Components/rightPane';
import LeftPane from './components/App_Components/leftPane';
import React, { useEffect, useState } from 'react';


function fetchFromLocalStorage() {
  return (localStorage.getItem('discussion-app') ? JSON.parse(localStorage.getItem('discussion-app')) : []);
}
function updateLocalStorage(newQuestionArray) {
  localStorage.setItem('discussion-app', JSON.stringify(newQuestionArray));
}




function App() {

  const [switchComponent, setSwitchComponent] = useState('QF');
  const [questionArray, setquestionArray] = useState(fetchFromLocalStorage());

  // will be useful when fetching the responses of the question from local storage
  const [questionSubject, setQuestionSubject] = useState(null);


  const handleQuestionAdd = (newQuestion) => {
    setquestionArray([...questionArray, newQuestion]);
    //add to localStorage
  }

  // will update local storage every time new wuestion is added
  useEffect(() => {
    updateLocalStorage(questionArray);
  }, [questionArray])

  const handleQuestionClick = (questionHeading) => {
    // console.log(questionHeading)
    setSwitchComponent('QR');
    // pass this heading to the right pane for fetching the data from local storage
    setQuestionSubject(questionHeading);
  }

  return (
    <div className="App">
      <LeftPane questionArray={questionArray} handleQuestionClick={handleQuestionClick} setSwitchComponent={setSwitchComponent}/>
      <RightPane
        questionAdd={handleQuestionAdd}
        qSubject={questionSubject}
        switchComponent={switchComponent}
        setSwitchComponent={setSwitchComponent}
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
