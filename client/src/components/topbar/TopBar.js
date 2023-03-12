import "./topBar.css"
//icons import
import { Search, Person, Chat, Notifications } from '@mui/icons-material';


const TopBar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="topbarLogo">Bn'R Social</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <Search className="searchIcon" />
                <input type="text" placeholder='Search for anything' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/pp1.jpg" alt="profilePicture" className="topbarImg" />
        </div>
    </div>
  )
}

export default TopBar