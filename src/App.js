import './App.css';
import RightPane from './components/App_Components/rightPane';
import LeftPane from './components/App_Components/leftPane';
import React, { useCallback, useEffect, useState } from 'react';


function fetchFromLocalStorage() {
  return (localStorage.getItem('discussion-app') ? JSON.parse(localStorage.getItem('discussion-app')) : []);
}
function updateLocalStorage(parentArray) {
  console.log("In update LS fnc")
  localStorage.setItem('discussion-app', JSON.stringify(parentArray));
}


function getQuestionIndex(question, array) {
  let questionIndex = array.findIndex((obj) => {
    return (obj.question === question)
  });
  return questionIndex;
}
function getSubjectIndex(subject, array) {
  let subIndex = array.findIndex((obj) => {
    return (obj.Subject === subject);
  });
  return subIndex;
}


function addQuestionToLS(subject, question) {
  let parentArray = fetchFromLocalStorage();
  // console.log(parentArray)
  let objIndex = getSubjectIndex(subject, parentArray);
  if (objIndex === -1) {
    let Obj = {
      Subject: subject,
      Questions: [{
        question: question,
        responses: []
      }]
    }
    parentArray.push(Obj);
  }
  else {
    let ques = {
      question: question,
      responses: []
    }
    console.log(objIndex)
    parentArray[objIndex].Questions.push(ques);
  }
  updateLocalStorage(parentArray);
}




function App() {
  console.log("App re-render");
  const [switchComponent, setSwitchComponent] = useState('QF');
  const [parentArray, setParentArray] = useState(fetchFromLocalStorage());

  // used for search functionality
  const [filteredArray, setFilteredArray] = useState(parentArray);
  // will be useful when fetching the responses of the question from local storage
  const [responseKey, setResponseKey] = useState(null);


  useEffect(() => {
    console.log(responseKey)
  }, [responseKey]);


  useEffect(() => {
    console.log("In parentArray Effect Hook")
    // everytime parentArray is changed local storage get updated
    // updateLocalStorage(parentArray);x  
    setFilteredArray(parentArray);

  }, [parentArray]);


  const handleQuestionAdd = (subject, question) => {
    addQuestionToLS(subject, question);
    setParentArray(fetchFromLocalStorage());
  }

  const handleQuestionClick = (subject, question) => {
    // console.log(questionHeading)
    setResponseKey({ subject: subject, question: question });
    setSwitchComponent('QR');
    // pass this heading to the right pane for fetching the data from local storage
  }

  // will update the parentArray by fetching the updated one from localStorage
  const handleResolveClick = (subject, question) => {

    //deleting object from the parentArray
    let tempArray = parentArray;
    let subIndex = getSubjectIndex(subject, tempArray);
    let questionIndex = getQuestionIndex(question, tempArray[subIndex].Questions);

    tempArray[subIndex].Questions.splice(questionIndex, 1);
    if (tempArray[subIndex].Questions.length == 0) {
      tempArray.splice(subIndex, 1);
    }

    // updating the parent array
    setParentArray(tempArray);
    //update in Local Storage
    updateLocalStorage(tempArray);

    setSwitchComponent('QF');
  }

  const handleResponseAdd = (subject, questionObject) => {

    let subIndex = getSubjectIndex(subject, parentArray);
    let SubjectObj = parentArray[subIndex];

    console.log("in ResponseAdd: ");
    console.log(SubjectObj);
    //finding the QuestionObject
    let questionObjIndex = getQuestionIndex(questionObject.question, SubjectObj.Questions);

    // will update the Questions array in the SubjectObj (new QuestionAdded into the Questions
    // removing the  old)
    SubjectObj.Questions.splice(questionObjIndex, 1, questionObject);

    let tempArray = parentArray;
    // updating the SubjectObject in the parentArray
    tempArray.splice(subIndex, 1, SubjectObj);
    setParentArray(tempArray);
    //update in Local Storage
    updateLocalStorage(tempArray);


  }

  // to make sure that this fnc callback is memoized and remains the same across renders.
  // so to prevent the TopBar to re-render unneccessarily 
  const handleQuestionSearch = useCallback((inputValue) => {

    const tempArray = parentArray.map((obj) => {

      let qArr = obj.Questions.filter((ele) => ele.question.toLowerCase().includes(inputValue));

      if (qArr.length !== 0) {
        return {
          Subject: obj.Subject,
          Questions: qArr
        };
      }

      return null;

    }).filter(Boolean);

    // console.log(tempArray);
    setFilteredArray(tempArray);

  }, [])

  // const handleQuestionSearch = (inputValue) => {

  //   const tempArray = parentArray.map((obj) => {

  //     let qArr = obj.Questions.filter((ele) => ele.question.toLowerCase().includes(inputValue));

  //     if (qArr.length !== 0) {
  //       return {
  //         Subject: obj.Subject,
  //         Questions: qArr
  //       };
  //     }

  //     return null;

  //   }).filter(Boolean);

  //   // console.log(tempArray);
  //   setFilteredArray(tempArray);

  // }

  return (
    <div className="App">
      <LeftPane
        filteredArray={filteredArray}
        handleQuestionSearch={handleQuestionSearch}
        handleQuestionClick={handleQuestionClick}
        setSwitchComponent={setSwitchComponent}
      />
      <RightPane
        handleQuestionAdd={handleQuestionAdd}
        parentArray={parentArray}
        handleResponseAdd={handleResponseAdd}
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
