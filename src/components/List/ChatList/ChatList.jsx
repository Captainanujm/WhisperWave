import "./ChatList.css";
import {react,useState} from "react";
function ChatList(){
    const [image,updateImage]=useState(false);
    return(<div className="Chatlist">
        <div className="search">
            <div className="searchBar">
                <img src="../../../public/search.png" alt="search-image"/>
                <input type="text" placeholder="Search"/>
            </div>
           {image==false? <img onClick={()=>{updateImage(true)}} className="Add-users" src="../../../public/plus.png" alt="plus-icon"/>:<img className="Add-users" src="../../../public/minus.png" alt="plus-icon"/>} 
        </div>
       
        <div className="item">
            <div className="users">
            <img src="../../../public/avatar.png"/>
            <div className="message">
                <span className="user-name">User0</span>
                <p>Hello,How are you</p>
            </div>
            </div>
            <div className="users">
            <img src="../../../public/avatar.png"/>
            <div className="message">
                <span className="user-name">User1</span>
                <p>Hello,How are you</p>
            </div>
            </div>
            <div className="users">
            <img src="../../../public/avatar.png"/>
            <div className="message">
                <span className="user-name">User2</span>
                <p>Hello,How are you</p>
            </div>
            </div>
            <div className="users">
            <img src="../../../public/avatar.png"/>
            <div className="message">
                <span className="user-name">User3</span>
                <p>Hello,How are you</p>
            </div>
            </div>
            <div className="users">
            <img src="../../../public/avatar.png"/>
            <div className="message">
                <span className="user-name">User4</span>
                <p>Hello,How are you</p>
            </div>
            </div>
            <div className="users">
            <img src="../../../public/avatar.png"/>
            <div className="message">
                <span className="user-name">User4</span>
                <p>Hello,How are you</p>
            </div>
            </div>
            <div className="users">
            <img src="../../../public/avatar.png"/>
            <div className="message">
                <span className="user-name">User4</span>
                <p>Hello,How are you</p>
            </div>
            </div>
            <div className="users">
            <img src="../../../public/avatar.png"/>
            <div className="message">
                <span className="user-name">User4</span>
                <p>Hello,How are you</p>
            </div>
            </div>
            <div className="users">
            <img src="../../../public/avatar.png"/>
            <div className="message">
                <span className="user-name">User4</span>
                <p>Hello,How are you</p>
            </div>
            </div>
            <div className="users">
            <img src="../../../public/avatar.png"/>
            <div className="message">
                <span className="user-name">User4</span>
                <p>Hello,How are you</p>
            </div>
            </div> 
            <div className="users">
            <img src="../../../public/avatar.png"/>
            <div className="message">
                <span className="user-name">User4</span>
                <p>Hello,How are you</p>
            </div>
            </div>
        </div>
    </div>)
}
export default ChatList;