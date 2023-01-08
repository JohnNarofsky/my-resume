import React from 'react';
import './resume.css';
import Education from './education/education'
import Identification from './identification/identification'
import Skills from './skills/skills';
import Experience from './experience/experience';


export default class Resume extends React.Component{
    render() {
        return (
            <>
                <div>Resume</div>
                <div><Identification/></div>
                <div><Education/></div>
                <div><Skills/></div>
                <div><Experience/></div>
            </>
        );
    }
}