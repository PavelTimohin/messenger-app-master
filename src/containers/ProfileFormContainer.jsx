import React from 'react';
import Profile from '../components/ProfileForm';

const ProfileFormContainer = () => {
  const handleSettingsClick = () => {
    // handle settings click logic
  };

  const handleFindFriendsClick = () => {
    // handle find friends click logic
  };

  const handleMessageClick = () => {
    // handle message click logic
  };

  const handleLogoutClick = () => {
    // handle logout click logic
  };

  return (
    <Profile
      firstName="Pavel"
      lastName="Timohin"
      photoUrl="https://s1.livelib.ru/boocover/1005118552/o/c980/Oleg_Valujskij__Kot_Fedot._Kniga_pervaya.jpeg"
      onSettingsClick={handleSettingsClick}
      onFindFriendsClick={handleFindFriendsClick}
      onMessageClick={handleMessageClick}
      onLogoutClick={handleLogoutClick}
    />
  );
};

export default ProfileFormContainer;
