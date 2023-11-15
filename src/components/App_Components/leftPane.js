
// **leftPane** ->
//                 buttons
//                   -> New Question Form (btn) (linked with the Question form in right pane)
//                   -> Search questions (input box)
//                 List Of Questions
//                       -> Subject
//                       -> Question


import QuestionsList from "../Left_Pane_Components/QuestionsList";
import TopBar from "../Left_Pane_Components/TopBar";



function LeftPane({filteredArray, handleQuestionSearch, handleQuestionClick, setSwitchComponent }) {

    return (
        <div className="left-pane">
            <TopBar handleQuestionSearch={handleQuestionSearch} setSwitchComponent={setSwitchComponent}/>
            <QuestionsList filteredArray={filteredArray} handleQuestionClick={handleQuestionClick} />
        </div>
    )
}

export default LeftPane;


