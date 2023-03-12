import "./sidebarFriend.css"

const sidebarFriend = ({user}) => {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="profilePicture" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default sidebarFriend