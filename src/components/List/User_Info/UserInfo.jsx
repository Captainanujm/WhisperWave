import "./UserInfo.css";
function UserInfo(){
    return(<div className="UserInfo">
        <div className="avatar">
            <img src="../../../../public/avatar.png" alt="profile-image"/>
            <div className="name">
            Anuj Mishra
        </div>
        </div>
        <div className="icons">
        <img src="../../../../public/more.png" alt="more-image"/>
        <img src="../../../../public/video.png" alt="video-image"/>
        <img src="../../../../public/edit.png" alt="edit-image"/>
        </div>
    </div>)
}
export default UserInfo;