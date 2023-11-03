import logo from './logo.svg';
import './App.css';
import RightPane from './components/App_Components/rightPane';
import LeftPane from './components/App_Components/leftPane';
import { useState } from 'react';

function App() {

  const [questionArray, setquestionArray] = useState([]);
  var qIndex = -1;
  function handleQuestionAdd(newQuestion) {
    setquestionArray([...questionArray, newQuestion]);
  }

  function handleQuestionClick(questionHeading) {
    console.log(questionHeading)
    qIndex = questionArray.findIndex((questionObj) => {
      return (questionObj.Subject == questionHeading)
    })

  }

  return (
    <div className="App">
      <LeftPane questionArray={questionArray} handleQuestionClick={handleQuestionClick} />
      <RightPane questionArray={questionArray} switchPane={qIndex} questionAdd={handleQuestionAdd} />
    </div>
  );
}

export default App;


//// question click and response section show
