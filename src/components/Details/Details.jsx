import "./Details.css";
function Details(){
    return(<div className="details">
        <div className="details-profile">
            <img src="../../../public/avatar.png" alt="avatar"/>
            <h3>Anuj Mishra</h3>
            <span>Lorem ipsum dolor sit.</span>
        </div>
        <div className="settings">
         <div className="chat-setting">
            <span>Chat Settings</span>
            <img src="../../../public/arrowUp.png"/>
        </div>
        <div className="chat-setting">
            <span>Chat Settings</span>
            <img src="../../../public/arrowUp.png"/>
        </div>
        <div className="privacy-help">
            <span>Privacy & Help</span>
            <img src="../../../public/arrowUp.png"/>
        </div>
        <div className="shared-photos">
            <div className="shared">
            <span>Shared Photos</span>
            <img src="../../../public/arrowDown.png"/>
            </div>
           <div className="photos">
           <div className="photo-number">
                <div className="image">
                <img src="https://pixabay.com/photos/sky-mountains-peak-snow-background-8763986/"/>
                <span>Photo_2024.png</span>
                </div>
                <img className="logo-img"src="../../../download.png"/>
            </div>
            <div className="photo-number">
                <div className="image">
                <img src="https://pixabay.com/photos/sky-mountains-peak-snow-background-8763986/"/>
                <span>Photo_2024.png</span>
                </div>
                <img className="logo-img"src="../../../download.png"/>
            </div>
            <div className="photo-number">
                <div className="image">
                <img src="https://pixabay.com/photos/sky-mountains-peak-snow-background-8763986/"/>
                <span>Photo_2024.png</span>
                </div>
                <img className="logo-img"src="../../../download.png"/>
            </div>
            <div className="photo-number">
                <div className="image">
                <img className="img"src="https://pixabay.com/photos/sky-mountains-peak-snow-background-8763986/"/>
                <span>Photo_2024.png</span>
                </div>
                <img className="logo-img"src="../../../download.png"/>
            </div>
            </div>
        </div>
        <div className="Shared-files">
            <span>Shared Files</span>
            <img src="../../../public/arrowUp.png"/>
        </div>
        <div className="block">
            <button className="block-button">Block User</button>
        </div>
        </div>
       
    </div>)
}
export default Details;