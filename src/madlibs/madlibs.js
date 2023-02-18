import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import axios from "axios";

import WordList from './wordlist';
import WorkSpace from './workspace';
import GameResult from './gameresult';

import './madlibs.css';

const baseURL = "http://localhost:5225/Madlibs?GameId=3";

export default function MadLibs(){
    useEffect(() => {
    
        axios.get(baseURL).then((response) => {
            setEntries(response.data.wordEntries);
            setResults(response.data.article);
        });
        
    }, []);

    const [results, setResults] = useState('');
    const [entries, setEntries] = useState([]);
    const [currentEntry, setCurrentEntry] = useState({id:-1, tag: -1, type: '', value: ''});
    const [isOver, setIsOver] = useState(false);
    const [isDone, setIsDone] = useState(false);

    function saveEntry(entry){
        setCurrentEntry(entry);
        let newEntries = entries.map((e) => {
            if (e.tag === entry.tag){
                return {...e, value: entry.value};
            }
            return e;
        });
        setEntries(newEntries);
        setIsDone(!newEntries.some((e) => e.value === ''));
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
        return(<></>);
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
        <div className='container-sm'>
            <div className='row'>
                <GameResult goBack={goBack} results={results} />
            </div>
        </div>
    );
    
}