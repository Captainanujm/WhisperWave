import {react,useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";
function Login(){
    const [avatar,setavatar]=useState({
        file:null,
        url:"",
    });
    function handleChange(event){
        setavatar({
            file:event.target.files[0],
            url:URL.createObjectURL(event.target.files[0])
        });
    }
    function handleClick(){
        toast.success("Submitted succesfully");
    }
    return (<div className="Login">
        <div className="login-page">
        <span>Welcome back,</span>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="password"/>
        <button onClick={handleClick} className="Sign-in">Sign In</button>
        </div>
        <div className="registration-page">
            <span>Create an Account</span>
            <div className="register-image">
            <img src={avatar.url?avatar.url:"../../../public/avatar.png"}/>
            <label style={{cursor:"pointer"}}for="for-file">Upload an image</label>
            <input style={{display:"none"}}type="file" id="for-file" onChange={handleChange}/>
            </div>
           <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password"/>
            <button className="Sign-up">Sign Up</button>
           <ToastContainer position="top-center"/>
        </div>
    </div>)
}
export default Login;