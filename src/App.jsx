import Chat from "./components/Chat/Chat";
import Details from "./components/Details/Details";
import List from "./components/List/List";
const App = () => {
  return (
    <div className='App'>
      <List/>
      <Chat/>
      <Details/>
    </div>
  )
}

export default App