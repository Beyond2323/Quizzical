import React from "react";

const FirstView = (props) => {

    return (
    <div>
        <div className="image"></div>
        <div className="image2"></div>
        <div className="controlFirst">
        <div className="head">Quizzical</div>
        <div className="letter">Some description if needed</div>
        <button className="button" disabled={!props.load} onClick={props.handle}>Start quiz</button>
        </div>
    </div>
    )
}

export default FirstView