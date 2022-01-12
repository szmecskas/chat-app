import React from 'react'
import {ImUser} from 'react-icons/im';
import {TiTimes} from 'react-icons/ti';
import {AiOutlineCopy} from 'react-icons/ai';
import "../../../CSS/MeetingInfo.scss";


const MeetingInfo = () => {
    return (
        <div className="meeting-info-block">
            <div className='meeting-header'>
                <h3>Your meeting's ready</h3>
                <TiTimes className='icon' />
            </div>
            <button class="add-people-btn">
                <ImUser className='icon' />
                Add participants
            </button>
            <p className='info'>
                Or share the meeting link.
            </p>
            <div className='meet-link'>
                <span>Random URL</span>
                <AiOutlineCopy className='icon' />
            </div>
            <p className='small-text'>Joined as lidia.szm@gmail.com</p>
        </div>
    );
}

export default MeetingInfo;