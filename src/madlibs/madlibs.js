import React from 'react';
import { useCallback } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useInsertionEffect } from 'react';
import { useLayoutEffect } from 'react';
import { useMemo } from 'react';
import { useReducer } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useSyncExternalStore } from 'react';
import { useTransition } from 'react';

import WordList from './wordlist';
import WorkSpace from './workspace';
import GameResult from './gameresults';

import './madlibs.css';


export default function MadLibs(){
    let dummyEntries = [
        { id: 0, tag: 1, type: 'noun', value: ''},
        { id: 1, tag: 2, type: 'verb', value: ''},
        { id: 2, tag: 3, type: 'verb', value: ''},
    ];

    const [results, setResults] = useState('');
    const [entries, setEntries] = useState(dummyEntries);
    const [currentEntry, setCurrentEntry] = useState({id:-1, tag: -1, type: '', value: ''});
    const [isOver, setIsOver] = useState(false);
    const [isDone, setIsDone] = useState(false);

    function saveEntry(entry){
        setCurrentEntry(entry);
        console.log(entry.value);
        let newEntries = entries.map((e) => {
            if (e.tag === entry.tag){
                console.log('found it');
                return {...e, value: entry.value};
            }
            return e;
        });
        setEntries(newEntries);

        //set isDone to true if all entries are entered
        setIsDone(true);
    }

    function clearEntry(entry){
        setIsDone(false);
    }

    function Proceed(){
        if (isDone){
            return (
                <button onClick={() => setIsOver(true)} className="btn btn-primary">Show Results</button>
            );
        }
    }

    function checkifOver(){
        //this is where we see if we handled everything and actually change isOver
    }

    function goBack(){
        setIsOver(false);
    }

    if (!isOver){
        return (
            <div className='container-sm'>
                <div className='row'>
                    <WordList entries = {entries} handleEntrySelection={setCurrentEntry} onEntryClear={clearEntry} />
                    <WorkSpace currentEntry = {currentEntry} saveEntry = {saveEntry} />
                </div>
                <div className='row'>
                    <Proceed/>
                </div>
            </div>
        );    
    }
    return (
        <div className='subapp'>
            <GameResult goBack={goBack} />
        </div>
    );
    
}