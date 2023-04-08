import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.Online : css.Offline}></span>
            <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width={70}
      />
  <p className={css.name}>{name}</p>
</li>
    )
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};