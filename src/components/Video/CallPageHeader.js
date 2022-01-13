import React from 'react'
import {FaUserFriends} from 'react-icons/fa';
import {ImUser} from 'react-icons/im'
import "../../CSS/CallPageHeader.scss"

const CallPageHeader = () => {
    return (
        <div className='frame-header'>
            <div className='header-items icon-block'>
                <FaUserFriends className='icon' />
            </div>
            <div className='header-items date-block'>
                18:32 PM
            </div>
            <div className='header-items icon-block'>
                <ImUser className='icon' />
                <span className='alert-circle-icon' />
            </div>
        </div>
    );
}

export default CallPageHeader;