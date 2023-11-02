import React, { useState } from "react";


function QuestionsList() {
    let listofquestions = [
        <div className="questions-list">
            <h2>questionHeading</h2>
            <p>questionText</p>
        </div>,
        <div className="questions-list">
            <h2>questionHeading</h2>
            <p>questionText</p> 
        </div>
    ]
    return (
        <div className="background-gray">
            {/* will be an array of divs c */}
            {listofquestions}
        </div>
    )
}

export default QuestionsList;