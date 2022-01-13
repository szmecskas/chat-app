import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';
import { AiOutlineCopy } from 'react-icons/ai';
import CallPageHeader from './CallPageHeader';
import '../../CSS/VideoHome.scss';
import MeetingInfo from './MeetingInfo';
import CallPageFooter from './CallPageFooter';

function VideoHome() {
  const [peerId, setPeerId] = useState('');
  const [meetInfoPopup, setMeetInfoPopup] = useState(true);
  const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);

  function getLocalStream() {
    navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
        window.localStream = stream;
        window.localAudio.srcObject = stream;
        window.localAudio.autoplay = true;
    }).catch( err => {
        console.log("u got an error:" + err)
    });
}

getLocalStream();

  useEffect(() => {
    const peer = new Peer();

    peer.on('open', (id) => {
      setPeerId(id)
    });

    peer.on('call', (call) => {
      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        call.answer(mediaStream)
        call.on('stream', function(remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream
          remoteVideoRef.current.play();
        });
      });
    })

    peerInstance.current = peer;
  }, [])

  const call = (remotePeerId) => {
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {

      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, mediaStream)

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream
        remoteVideoRef.current.play();
      });
    });
  }

  return (
    
    <div className="VideoHome">
       <div className="body">
            <div><CallPageHeader /> </div>
            <div><CallPageFooter /></div>
            <br/>
            <div>
            {meetInfoPopup && (
              <MeetingInfo peerId={peerId} remotePeerIdValue={remotePeerIdValue} 
              setMeetInfoPopup={setMeetInfoPopup} setRemotePeerIdValue={setRemotePeerIdValue} call={call} />
            )}
            </div>
            <br/>
            <div className="video-container">
              <video classNme="video-item1" ref={currentUserVideoRef} />
              <video classNme="video-item2" ref={remoteVideoRef} />
            </div>
        </div>
    </div>
  );
}

export default VideoHome;
