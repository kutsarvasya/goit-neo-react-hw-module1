import s from "./Profile.module.css";

function Profile(props) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img className={s.avatar} src={props.image} alt="User avatar" />
        <p className={s.name}>{props.name}</p>
        <p className={s.tag}>@{props.tag}</p>
        <p className={s.location}>{props.location}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span className={s.value}>{props.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={s.value}>{props.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={s.value}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
