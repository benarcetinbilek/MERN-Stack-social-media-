import "./post.css"
import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material"
import {Users} from "../../dummyData"
import { useState } from "react"

const Post = ({post}) => {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="postprofileimg" className="postProfileImg" />
                    <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert className="postOptions" />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src="/assets/a.jfif" alt="postimg" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <Favorite className="likeIcon" htmlColor="red" onClick={likeHandler} />
                    <ThumbUp className="likeIcon" htmlColor="blue" onClick={likeHandler} />
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post