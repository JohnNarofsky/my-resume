import React from "react";

export default function GameResult({goBack}){
    console.log(goBack);
    function handleClick(){
        goBack();
    }

    return (
        <div className='game-results'>
            <button onClick={handleClick}>Show Entry</button>
        </div>
    );
}