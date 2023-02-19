import React, {useState} from "react";

export default function WorkSpace({currentEntry, setCurrentEntry}){
    function onChange(e) {
        setCurrentEntry({...currentEntry, value: e.target.value});
    }

    return (
        <div className='work-space col'>
            <p>Enter a {currentEntry.type}!</p>
            <input onChange={onChange} value={currentEntry.value}/>
        </div>
    );
}