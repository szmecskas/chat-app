import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';
import { AiOutlineCopy } from 'react-icons/ai';
import '../../CSS/VideoHome.scss';

function VideoHome() {
  const [peerId, setPeerId] = useState('');
  const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);

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
                <div className='content'>
        <div className='meet-link'>
            <p>ID</p>
            <span>{peerId}</span>
            <AiOutlineCopy className='icon' onClick={() => {
                navigator.clipboard.writeText(peerId);
            }} />
        </div>
        <br/>
        <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} placeholder="ID to call "/>
        <button onClick={() => call(remotePeerIdValue)}>Call</button>
        <div>
            <video ref={currentUserVideoRef} />
        </div>
        <div>
            <video ref={remoteVideoRef} />
        </div>
        </div>
        </div>
    </div>
  );
}

export default VideoHome;
