import {react,useState} from "react";
import EmojiPicker from "emoji-picker-react";
import "./Chat.css";

function Chat(){
    const [openEmoji,setOpenEmoji]=useState(false);
    const [inputText,setinputText]=useState('');
    function onEmclick(emojiObject){
        setinputText(prevInput=>{
            setOpenEmoji(false);
            return prevInput + emojiObject.emoji;
        });
    }
    function handleInputChange(event){
        setinputText(event.target.value);
    }
    return(<div className="chat">
        <div className="profile">
        <div className="profile-name">
            <img src="../../../public/avatar.png" alt="avatar-image"/>
            <div className="content">
            <span>Anuj Mishra</span>
            <p>Lorem ipsum dolor sit.</p>
            </div>
        </div>
    <div className="icons">
        <img src="../../../public/phone.png"/>
        <img src="../../../public/video.png"/>
        <img src="../../../public/info.png"/>
    </div>
        </div>
        <div className="center">
            <div className="other-message">
                <img src="../../../public/avatar.png"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ipsa accusantium hic optio atque. Cupiditate, provident. Nihil nam alias
                      quibusdam hic dignissimos illo laboriosam facilis.
                </p>
            </div>
            <div className="own-message">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolor nam similique blanditiis quam sunt dolores ratione,
                 libero veniam explicabo itaque optio, tempora quia omnis?
            </p>
            </div>
            <div className="other-message">
                <img src="../../../public/avatar.png"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ipsa accusantium hic optio atque. Cupiditate, provident. Nihil nam alias
                      quibusdam hic dignissimos illo laboriosam facilis.
                </p>
            </div>
            <div className="own-message">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolor nam similique blanditiis quam sunt dolores ratione,
                 libero veniam explicabo itaque optio, tempora quia omnis?
            </p>
            </div>
            <div className="other-message">
                <img src="../../../public/avatar.png"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ipsa accusantium hic optio atque. Cupiditate, provident. Nihil nam alias
                      quibusdam hic dignissimos illo laboriosam facilis.
                </p>
            </div>
            <div className="own-message">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolor nam similique blanditiis quam sunt dolores ratione,
                 libero veniam explicabo itaque optio, tempora quia omnis?
            </p>
            </div>
        </div>
       {openEmoji==true?<div className="emoji"><EmojiPicker onEmojiClick={onEmclick}/></div>:null} 
        <div className="bottom">
            <div className="bottom-compo">
                <img src="../../../public/img.png"/>
                <img src="../../../public/camera.png"/>
                <img src="../../../mic.png"/>
                <input onChange={handleInputChange} type="text" value={inputText} placeholder="Type a message"/>
                <img onClick={()=>{setOpenEmoji((prev=>{
                    return !prev;
                }))}}src="../../../emoji.png"/>
                <button className="send-button">Send</button>
            </div>
        </div>
    </div>)
}
export default Chat;