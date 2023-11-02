
// **leftPane** ->
//                 buttons
//                   -> New Question Form (btn) (linked with the Question form in right pane)
//                   -> Search questions (input box)
//                 List Of Questions
//                       -> Subject
//                       -> Question



import QuestionsList from "../Left_Pane_Components/QuestionsList";
import TopBar from "../Left_Pane_Components/TopBar";


function LeftPane() {
    return (
        <div className="left-pane">
            <TopBar />
            <QuestionsList />
        </div>
    )
}

export default LeftPane;


