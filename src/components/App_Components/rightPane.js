// import React, { useState } from "react";

import QuestionForm from "../Right_Pane_Components/QuestionForm";
import QuestionAndResponse from "../Right_Pane_Components/QuestionAndResponse";

function RightPane(props) {
    
    return (
        <div className="right-pane">
            {props.switchComponent === 'QF' && <QuestionForm handleQuestionAdd={props.handleQuestionAdd} setSwitchComponent={props.setSwitchComponent}/>}
            {props.switchComponent === 'QR' && <QuestionAndResponse parentArray={props.parentArray} handleResponseAdd={props.handleResponseAdd} responseKey={props.responseKey} handleResolveClick={props.handleResolveClick} />}
        </div>
    )
}
export default RightPane;