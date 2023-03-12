import Feed from "../../components/feed/Feed"
import RightBar from "../../components/rightbar/RightBar"
import SideBar from "../../components/sidebar/SideBar"
import TopBar from "../../components/topbar/TopBar"
import "./profile.css"

const Profile = () => {
  return (
    <>
        <TopBar/>
        <div className="profile">
            <SideBar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="/assets/a.jfif" alt="headPicture" className="profileCoverImg" />
                        <img src="/assets/pp1.jpg" alt="headPicture" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Benar cetinbilek</h4>
                        <span className="profileInfoDesc">What's up</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <RightBar profile />
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile