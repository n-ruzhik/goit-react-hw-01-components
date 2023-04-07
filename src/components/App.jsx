import Profile from 'components/Profile';
import userData from 'data/user.json';

export default function App() {
  return (
    <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
    />
  );
};

