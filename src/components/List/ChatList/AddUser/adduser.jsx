import react from "react";
import "./adduser.css";
function Adduser(){
    return(<div className="add">
        <div className="firstdiv">
            <input type="text" placeholder="Username"></input>
            <button>Search</button>
        </div>
        <div className="seconddiv">
            <div className="profile">
            <img src="../../../../public/avatar.png"/>
            <span>Anuj Mishra</span>
            </div>
            <button>Add User</button>
        </div>
    </div>)
}
export default Adduser;