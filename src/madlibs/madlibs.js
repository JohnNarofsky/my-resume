import React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';
import { useRef } from 'react';
import axios from "axios";
import _ from "lodash";
import {env} from "process";

import WordList from './wordlist';
import WorkSpace from './workspace';
import GameResult from './gameresult';
import './madlibs.css';

//azure
//const baseURL = "https://madlibsapi20230221095240.azurewebsites.net/Madlibs?GameId=3";

//aws
const baseURL = "http://madli-recip-qf86ndp62dd9-929538723.us-east-1.elb.amazonaws.com/madlibs?gameid=5"


//const baseURL = env.BASEAPIURL; 

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
    const [debouncedEntry, setDebouncedEntry] = useState({id:-1, tag: -1, type: '', value: ''});
    const [isOver, setIsOver] = useState(false);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        debounce(currentEntry);
    }, [currentEntry]);

    const debounce = useCallback(
        _.debounce((entry) => {
            setDebouncedEntry(entry);
            }, 1000),
        []
    );

    useEffect(()=>{
        let newEntries = entries.map((e) => {
            if (e.tag === debouncedEntry.tag){
                return {...e, value: debouncedEntry.value};
            }
            return e;
        });
        setEntries(newEntries);
        setIsDone(!newEntries.some((e) => e.value === ''));
    }, [debouncedEntry]);

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
                    <WorkSpace currentEntry = {currentEntry} setCurrentEntry = {setCurrentEntry}/>
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
                <GameResult goBack={goBack} results={results} entries={entries} />
            </div>
        </div>
    );
    
}