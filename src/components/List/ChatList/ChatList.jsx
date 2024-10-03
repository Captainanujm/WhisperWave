import "./ChatList.css";
import {react,useState} from "react";
import Adduser from "./AddUser/adduser";
function ChatList(){
    const [image,updateImage]=useState(false);
    const [adding,setadding]=useState(false);
    return(<div className="Chatlist">
        <div className="search">
            <div className="searchBar">
                <img src="../../../public/search.png" alt="search-image"/>
                <input type="text" placeholder="Search"/>
            </div>
           {image==false? <img onClick={()=>{updateImage(true);
            setadding(true);
           }} className="Add-users" src="../../../public/plus.png" alt="plus-icon"/>:<img onClick={()=>{
            updateImage(false);
            setadding(false);
           }} className="Add-users" src="../../../public/minus.png" alt="plus-icon"/>} 
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
        {adding?<div className="adduserdiv">
        <Adduser/>
        </div>:null} 
    </div>)
}
export default ChatList;