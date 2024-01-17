import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  const friendItem = friends.map(({ avatar, name, isOnline, id }) => (
    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
  ));
  return <ul class="friend-list">{friendItem}</ul>;
};
export default FriendList;
