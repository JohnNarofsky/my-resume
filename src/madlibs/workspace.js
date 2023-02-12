import React from "react";
import { useState } from "react";

export default function WorkSpace({currentEntry, saveEntry}){
    function onChange(e) {
        saveEntry({...currentEntry, value: e.target.value});
    }

    if (currentEntry.id !== -1){
        return (
            <div className='work-space col'>
                <p>Enter a {currentEntry.type}!</p>
                <input onChange={onChange} value={currentEntry.value}/>
            </div>
        );
    }
    return(<div className='work-space col'>{' '}</div>);
}