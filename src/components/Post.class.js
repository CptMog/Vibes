import "./Post.css";
function Post(props){
    return(
        <div className="container-post">
            <div className="post-profile">
                <div className="post-profile-state-bulle">
                    <div className="post-profile-bulle">

                    </div>
                    <span>{props.name}</span>
                </div>
            </div>
            <div className="post-content">
                <img src={props.img} alt="insta girl" />
            </div>
        </div>
    )
}

export default Post;