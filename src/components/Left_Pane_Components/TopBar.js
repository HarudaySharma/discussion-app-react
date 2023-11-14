import React, { useEffect, useState } from "react";
import { debounce } from "lodash";



function TopBar({ handleQuestionSearch, setSwitchComponent }) {
    function QuestionFormShowBtn(props) {
        return (
            // on click will show the Question form in the right pane
            <button
                className="form-btn buttons"
                onClick={() => { props.showForm('QF') }}
            >
                New Question Form
            </button>
        )
    }

    function SearchQuestions() {
        const [inputValue, setInputValue] = useState('');
        // Debounce the handleQuestionSearch function
        const debouncedSearch = debounce((value) => handleQuestionSearch(value), 3000);

        useEffect(() => {
            // Trigger the debounced search function when inputValue changes
            debouncedSearch(inputValue.trim().toLowerCase());
        }, [inputValue])


        function handleSearchInputChange(e) {
            setInputValue(e.target.value);
        }

        return (
            <input
                className="search-box"
                type="text"
                placeholder="search questions..."
                value={inputValue}
                onChange={handleSearchInputChange}
            />
        )
    }
    return (
        <div className="top-bar">
            <QuestionFormShowBtn showForm={setSwitchComponent} />
            <SearchQuestions />
        </div>
    )
}

export default TopBar;