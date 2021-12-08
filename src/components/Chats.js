import React, {useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';
import axios from 'axios';

import { useAuth } from '../contexts/AuthContext'; //getting the user from context


const Chats = () => {
    
    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }

    const getFile = async(url) => {    // we're telling the async function to stop executing until the promise is resolved
        const response = await fetch(url);
        const data = await response.blob(); //blobs are files (like images) that you want to transfer in binary format
        return new File([data],"userPhoto.jpg", {type: 'image/jpeg' })
    }

    useEffect(() => {
        if(!user) {
            history.push('/');
            return;
        }

        axios.get('https://api.chatengine.io/users/me', { //trying to get the created user
            headers: {
                "project-id": "afae52ed-0708-4003-b34e-d3143d5b6ad8",
                "user-name": user.email, //user from our useAuth context
                "user-secret": user.uid,
            }
        })
        .then(() => {       //if we have a chat engine profile
            setLoading(false);
        })
        .catch(() => {
            let formdata = new FormData();  
            formdata.append('email',user.email);
            formdata.append('username',user.email);
            formdata.append('secret',user.uid);

            getFile(user.photoURL)  //if we het the photo (the user)
                .then((avatar) => {     //rendering avatar 
                    formdata.append('avatar', avatar, avatar.name);  //append the photo

                    axios.post('https://api.chatengine.io/users',       //post request for creating documents
                            formdata,
                            { headers: { "private-key": "4118a5bf-16a0-4764-8db2-de1a57e7c60f"}}
                    )
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))    
                })
        })
    }, [user, history]);

    if(!user || loading) return 'Loading...';

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    V-Chat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectID="afae52ed-0708-4003-b34e-d3143d5b6ad8"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
}

export default Chats;