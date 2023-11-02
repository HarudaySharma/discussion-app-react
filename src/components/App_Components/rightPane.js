import React, { useState } from "react";

import QuestionForm from "../Right_Pane_Components/QuestionForm";
import QuestionAndResponse from "../Right_Pane_Components/QuestionAndResponse";

function RightPane() {
    return (
        <div className="right-pane">
            <QuestionAndResponse />
        </div>
    )
}
export default RightPane;