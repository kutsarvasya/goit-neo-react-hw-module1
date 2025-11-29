import s from "./FriendListItem.module.css";
import clsx from "clsx";
function FriendListItem({ friend }) {
  return (
    <div className={s.itemContainer}>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p className={s.name}>{friend.name}</p>
      <p
        className={clsx(s.friendStatus, friend.isOnline ? s.online : s.offline)}
      >
        {friend.isOnline ? "online" : "offline"}
      </p>
    </div>
  );
}
export default FriendListItem;
