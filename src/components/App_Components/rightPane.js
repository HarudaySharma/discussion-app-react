// import React, { useState } from "react";

import QuestionForm from "../Right_Pane_Components/QuestionForm";
import QuestionAndResponse from "../Right_Pane_Components/QuestionAndResponse";

function RightPane(props) {
    
    return (
        <div className="right-pane">
            {props.switchComponent === 'QF' && <QuestionForm questionAdd={props.questionAdd} setSwitchComponent={props.setSwitchComponent}/>}
            {props.switchComponent === 'QR' && <QuestionAndResponse qSubject={props.qSubject} setSwitchComponent={props.setSwitchComponent} />}
        </div>
    )
}
export default RightPane;