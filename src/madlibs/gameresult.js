import React, { useEffect, useState } from "react";

export default function GameResult({goBack, results, entries}){
    function handleClick(){
        goBack();
    }

    const [filledArticle, setFilledArticle] = useState("");
    
    useEffect(() => {
        let consumedResults = results;
        let filled = '';

        let startingPoint = consumedResults.search(/{.}/gm);
        //need to roll through the string concatenating the entries with the chopped article

    },[entries]);

    return (
        <div className='game-results'>
            <div className='game-text'>{results}</div>
            <button onClick={handleClick}>Show Entry</button>
        </div>
    );
}