import React from 'react'
import { useHistory } from 'react-router';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext'; //getting the user from context


const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }

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
                projectId="afae52ed-0708-4003-b34e-d3143d5b6ad8"
                userName="."
                userSecret="."
            />
        </div>
    );
}

export default Chats;