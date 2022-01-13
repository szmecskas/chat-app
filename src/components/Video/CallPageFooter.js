import React from 'react';
import { FaVideo, FaClosedCaptioning } from "react-icons/fa";
import { MdArrowDropUp, MdOutlineStopScreenShare, MdOutlineScreenShare } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { BiMicrophone, BiMicrophoneOff } from "react-icons/bi";
import "../../CSS/CallPageFooter.scss";

const CallPageFooter = ({
  isPresenting,
  stopScreenShare,
  screenShare,
  isAudio,
  toggleAudio,
  disconnectCall,
}) => {
  return (
    <div className="footer-item">
      <div className="left-item">
        <div className="icon-block">
          Meeting details
          <MdArrowDropUp className='icon' />
        </div>
      </div>
      <div className="center-item">
        <div
          className={`icon-block ${!isAudio ? "red-bg" : null}`}
          onClick={() => toggleAudio(!isAudio)}>
          <BiMicrophone className='icon' />
         {/* <FontAwesomeIcon
            className="icon"
            icon={isAudio ? faMicrophone : faMicrophoneSlash}
          /> */}
        </div>
        <div className="icon-block" onClick={disconnectCall}>
        <AiOutlinePhone className='icon red' />
        </div>
        <div className="icon-block">
        <FaVideo className='icon' />
        </div>
      </div>
      <div className="right-item">
        <div className="icon-block">
        <FaClosedCaptioning className='icon red' />
          <p className="title">Turn on captions</p>
        </div>

        {isPresenting ? (
          <div className="icon-block" onClick={stopScreenShare}>
            <MdOutlineStopScreenShare className='icon red' />
            <p className="title">Stop presenting</p>
          </div>
        ) : (
          <div className="icon-block" onClick={screenShare}>
            <MdOutlineScreenShare className='icon red' />
            <p className="title">Present now</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallPageFooter;