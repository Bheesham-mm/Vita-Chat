import './App.css'
// components
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import Users from './Components/Users';
import Chatroom from './Components/Chatroom';

function App() {
  return (
    <>
      <div className="container flex">
        <Navbar />
        <div className='h-full'>
          <Search />
          <Users />
        </div>
        <div className="chatRoom">
          <Chatroom />
        </div>
      </div>
    </>
  );
}

export default App;
