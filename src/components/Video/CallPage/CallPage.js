import React from 'react';
import { Link } from "react-router-dom";
import "../../../CSS/CallPage.scss"
import CallPageHeader from './CallPageHeader';
import CallPageFooter from './CallPageFooter';
import MeetingInfo from './MeetingInfo';


const CallPage = () => {
    return (
        <div className='callpage-container'>
            <video className='video-container' src="" controls></video>

            <CallPageHeader />
            <CallPageFooter />
            <MeetingInfo />
            <div className="action-btn">
            <Link className="btn green" to="/video">
                Back
            </Link>
            </div>
        </div>
    );
}

export default CallPage;