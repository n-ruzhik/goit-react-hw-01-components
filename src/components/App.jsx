import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

import userData from 'data/user.json';
import statisticsData from 'data/statistics.json';
import friendsData from 'data/friends.json';
import transactionsData from 'data/transactions.json';

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
      <Statistics stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </>
  );
}
