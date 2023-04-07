import Profile from 'components/Profile';
import Statistics from 'components/Statistics';

import userData from 'data/user.json';
import dataData from 'data/data.json';


export default function App() {
  return (
    <>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
    />
      <Statistics stats={dataData} />
      </>
  );
};

