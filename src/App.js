
import './App.css';
import SideBar from "./modules/SideBar";
import Chat from "./modules/Chat";

function App() {
  return (
    <div className="app">
      <div className='app_body'>
      <SideBar/>
      <Chat/>
      </div>
    </div>
  );
}

export default App;
