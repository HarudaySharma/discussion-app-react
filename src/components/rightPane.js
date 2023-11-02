import react from "react"

export default function RightPane() {
    return (
        <div className="right-pane">
            <QuestionForm />
        </div>
    )
}


function QuestionForm() {
    function questionAdd() {}
    function Heading() {
        return (
            <div>
                <h1>Welcome to Discussion Portal !</h1>
                <h6>Enter a subject and question to get started</h6>
            </div>
        )
    }
    function SubjectInput() {
        return (
            <div>
                <input type="text" placeholder="subject"></input>
                <textarea placeholder="Question" className=""></textarea>
            </div>
        )
    }
    function Button() {
        return (
            <button type="button" onClick={questionAdd()}>Submit</button>
        )
    }

    return (
        <div className="question-form">
            <Heading />
            <SubjectInput />
            <Button />
        </div>
    )
}
