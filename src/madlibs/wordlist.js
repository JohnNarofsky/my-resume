import React from "react";

const Word = ({entry, handleEntrySelection}) => {

    const handleClick = () => {
        handleEntrySelection(entry);
    };

    return (
     <p onClick={handleClick}>{entry.tag}{' - '}{entry.type}{' - '}"{entry.value}"</p>
    );
}

export default function WordList({entries, handleEntrySelection, onEntryClear}){
    return(
        <div className='word-list col'>
            <p>Word List:</p>
            {entries.map((entry) => (
                <Word key={entry.id} entry={entry} handleEntrySelection={handleEntrySelection}/>
            ))}
        </div>
    );
}