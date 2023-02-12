import Game from './oldexample/oldexample';
import Resume from './resume/resume';
import MadLibs from './madlibs/madlibs';
import { Route, Routes, Link } from "react-router-dom"

export default function Routing(){
    return (
        <>
<Link to="/game">Game</Link> {' - '} <Link to="resume">Resume</Link> {' - '} <Link to="madlibs">Mad Libs</Link><br/><br/>

        <Routes>
            <Route path='/game' element={<Game/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/madlibs' element={<MadLibs/>}/>
        </Routes>

        </>
    );
}