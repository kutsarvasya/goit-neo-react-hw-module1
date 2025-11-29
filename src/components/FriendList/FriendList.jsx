import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <li key={friend.id} className={s.item}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
export default FriendList;
