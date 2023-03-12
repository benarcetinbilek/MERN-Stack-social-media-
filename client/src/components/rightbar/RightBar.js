import "./rightBar.css"
import { Cake } from "@mui/icons-material"
import {Users} from "../../dummyData"
import Online from "../online/Online"

const RightBar = ({profile}) => {

  const HomeRightBar = () =>{
    return (
      <>
        <div className="birthdayContainer">
          <Cake className="birthdayImg" htmlColor="red" fontSize="large" />
          <span className="birthdayText"><span>Pola Foster</span> and <span>3 other friends</span> have a birthday today</span>
        </div>
        <img src="/assets/ad.jfif" alt="rightbarAd" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => {
            return (
              <Online key={u.id} user={u} />
            )
          } )}        
        </ul>
      </>
    )
  }

  const ProfileRİghtBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">California</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">California</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/pp1.jpg" alt="followingpp" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">john john</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/pp1.jpg" alt="followingpp" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">john john</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/pp1.jpg" alt="followingpp" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">john john</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/pp1.jpg" alt="followingpp" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">john john</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/pp1.jpg" alt="followingpp" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">john john</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/pp1.jpg" alt="followingpp" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">See more</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRİghtBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}

export default RightBar