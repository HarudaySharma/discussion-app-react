import React, { useEffect, useState } from "react";



/* 
 - used memo to ensure that the component only renders when it's props(props value) is changed
 - handleQuestionSearch(App component function) is wrapped around CallBack hook to ensure that
   it's reference is not changed when the App comp. re-renders.
 - re-render of TopBar comp. on each App render would make the Search functionality cease to work.
    (beacuse as the comp. renders every time the search input get refreshed and is not able to get new values from the user)
*/

// TopBar should be render initially only
const TopBar = React.memo(({ handleQuestionSearch, setSwitchComponent }) => {
    console.log("TopBar render")
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
      
        useEffect(() => {
            handleQuestionSearch(inputValue);
        }, [inputValue]);

        function handleSearchInputChange(e) {
            e.preventDefault();
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
})

export default TopBar;