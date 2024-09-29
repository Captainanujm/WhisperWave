import ChatList from "./ChatList/ChatList";
import "./List.css";
import UserInfo from "./User_Info/UserInfo";
function List(){
    return(<div className="list">
        <UserInfo/>
        <ChatList/>
    </div>)
}
export default List;