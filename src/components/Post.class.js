import "./../styles/Post.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

function Post(props){
    return(
        <div className="container-post">
            <div className="post-profile">
                <div className="post-profile-state-bulle">
                    <div className="post-profile-bulle">

                    </div>
                </div>
                <div className="post-profile-infos">
                    <span>{props.name}</span>
                    <FontAwesomeIcon icon={faEllipsisH} id="post-settings"/>
                </div>  
            </div>
            <div className="post-content">
                <img src={props.img} alt="insta photo" />
            </div>
            <div className="post-profile-socials">
                <div>
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <div>
                <FontAwesomeIcon icon={faBookmark} />
                </div>
            </div>
        </div>
    )
}

export default Post;