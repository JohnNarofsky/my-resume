import React from "react";

export default function GameResult({goBack, results}){
    function handleClick(){
        goBack();
    }

    return (
        <div className='game-results'>
            <div className='game-text'>{results}</div>
            <button onClick={handleClick}>Show Entry</button>
        </div>
    );
}