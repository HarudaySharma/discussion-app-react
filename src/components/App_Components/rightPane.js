// import React, { useState } from "react";

import QuestionForm from "../Right_Pane_Components/QuestionForm";
import QuestionAndResponse from "../Right_Pane_Components/QuestionAndResponse";

function RightPane({ questionArray, switchPane, questionAdd }) {
    return (
        <div className="right-pane">
            {switchPane == -1 ?
                <QuestionForm questionAdd={questionAdd} /> :
                <QuestionAndResponse questionArray={questionArray} index={switchPane} />
            }
        </div>
    )
}
export default RightPane;