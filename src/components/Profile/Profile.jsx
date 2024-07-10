import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.parentContainer}>
      <div className={css.container}>
        <div>
          <img src={image} alt="User avatar" />
          <p>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
        <div className={css.containerStats}>
          <ul className={css.stats}>
            <li className={css.statItem}>
              <span>Followers</span>
              <span>{stats.followers}</span>
            </li>
            <li className={css.statItem}>
              <span>Views</span>
              <span>{stats.views}</span>
            </li>
            <li className={css.statItem}>
              <span>Likes</span>
              <span>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
