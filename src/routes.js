import Game from './oldexample/oldexample';
import Resume from './resume/resume';
import { Route, Routes, Link } from "react-router-dom"

export default function Routing(){
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/game">Game</Link></li>
                    <li><Link to="resume">Resume</Link></li>
                </ul>
            </nav>

        <Routes>
            <Route path='/game' element={<Game/>}/>
            <Route path='/resume' element={<Resume/>}/>
        </Routes>

        </>
    );
}