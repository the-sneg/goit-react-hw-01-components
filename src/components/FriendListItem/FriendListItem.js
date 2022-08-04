import React from 'react';
import s from '../FriendListItem/FriendListItem.module.css';
export const FriendListItem = ({ friend }) => {
  return (
    <li className={s.item}>
      <span className={friend.isOnline ? s.online : s.ofline}></span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </li>
  );
};
