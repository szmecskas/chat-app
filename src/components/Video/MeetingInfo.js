import React from 'react'
import {TiTimes} from 'react-icons/ti';
import {AiOutlineCopy} from 'react-icons/ai';

import "../../CSS/MeetingInfo.scss";


const MeetingInfo = ({peerId, call, remotePeerIdValue, setRemotePeerIdValue, setMeetInfoPopup}) => {
    return (
        <div className="meeting-info-block">
            <div className='meeting-header'>
                <h3>Your meeting's ready</h3>
                <TiTimes className='icon' onClick={() => {
                    setMeetInfoPopup(false);
                }} />
            </div>
            <br/>
            < div className='meet-link'>
                <div><span>{peerId} </span>
                <AiOutlineCopy className='icon' onClick={() => {
                    navigator.clipboard.writeText(peerId);
                }} />
                </div>
                <br/>
                <div className="div">
                    <input className="input" type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} placeholder="ID to call "/>
                    <button className="call-button" onClick={() => call(remotePeerIdValue)}>Call</button>
                </div>
            </div>
        </div>
    );
}

export default MeetingInfo;