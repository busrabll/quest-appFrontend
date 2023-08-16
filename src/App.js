import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import User from './components/User/User';
import SideBar from './components/SideBar/SideBar';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar></SideBar>
        <Widgets></Widgets>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/users/:userId" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
