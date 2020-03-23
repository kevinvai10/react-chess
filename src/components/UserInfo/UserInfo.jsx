import React from 'react';
const USER_INFO_DEFAULT = {
    profileImg: '../../assets/images/anonymousicon.jpg',
    name: 'Kevin',
    level: '99',
    status: 'Online',
}

export const UserInfo = (props) => {
    const { profileImg, name, level, status } = USER_INFO_DEFAULT;

    return (
        <div className="UserInfo">
            <div className="image">
                <img src={profileImg} alt="profile image"/>
            </div>
            <div className="labels">
                <label>{name}</label>
                <label>{level}</label>
                <label>{status}</label>
            </div>
        </div>
    )
}

export default UserInfo;
