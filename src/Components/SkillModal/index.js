import React from 'react'
import Experiences from './pieces/Experiences'
import Education from './pieces/Education'
import Skills from './pieces/Skills'
import './style.css'

const SkillModal = (props) => {

    let modalStyle = {
        display: 'none'
    }

    if (props.isOpen) {
        modalStyle.display = 'flex'
    } else {
        modalStyle.display = 'none'
    }

    return (
        <div className='modal-page' style={modalStyle} onClick={props.toggle}>
            <div className="modal">{props.whichOne === 'skills' ? <Skills /> : props.whichOne === 'experiences' ? <Experiences /> : <Education />}</div>
        </div>
    )
}

export default SkillModal