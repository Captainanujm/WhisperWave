import { useState } from "react";
import Chat from "./components/Chat/Chat";
import Details from "./components/Details/Details";
import List from "./components/List/List";
import Login from "./components/Login/Login";
const App = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(true);
  return (
    <div className='App'>
      {isLoggedIn?<>
        <List/>
      <Chat/>
      <Details/></>:<Login/>}
    </div>
  )
}

export default App