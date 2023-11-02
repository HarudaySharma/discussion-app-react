import React, { useState } from "react";

function TopBar() {
    function QuestionFormShowBtn() {
        return (
            // on click will show the Question form in the right pane
            <button>
                New Question Form
            </button>
        )
    }

    function SearchQuestions() {
        const [inputValue, setInputValue] = useState('');
        return (
            <input
                type="text"
                placeholder="search questions..."
                onChange={(e) => setInputValue(e.target.value)}
            />
        )
    }
    return (
        <div className="top-bar">
            <QuestionFormShowBtn />
            <SearchQuestions />
        </div>
    )
}

export default TopBar;