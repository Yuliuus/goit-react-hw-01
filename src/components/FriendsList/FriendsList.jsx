import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
