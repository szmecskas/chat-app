import React from 'react';
import { FaKeyboard, FaVideo} from 'react-icons/fa';
//import { FontawesomeIcon } from '@fortawesome/react-fontawesome';
//import { FaVideo, FaKeyboard } from '@fortawesome/free-solid-svg-icons';
import "../../CSS/VideoHome.scss";

const VideoHome = () => {
    return (
        <div className="video-page">
            <div className="body">
                <div className='content'>
                    <h2>Join or create a free metting right now!</h2>
                    <div className='action-btn'>
                        <button className='btn blue'>
                            <FaVideo  className="icon-block"/> 
                             New Meeting
                        </button>
                        <div className='input-block'>
                            <div className='input-section'>
                                <FaKeyboard className="icon-block"/>
                                <input placeholder="Enter a code or a link" />
                            </div>
                            <button className='btn no-bg'>Join </button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoHome;