import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Leftpane } from './components';
import Home from './components/pages/Home';

const App = () => {
  return (
    <div className="app">
      <Leftpane/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/explore' exact>Explore</Route>
      <Route path='/notifications' exact>Notifications</Route>
      <Route path='/messages' exact>Messages</Route>
      <Route path='/bookmarks' exact>Bookmarks</Route>
      <Route path='/lists' exact>Lists</Route>
      <Route path='/profile' exact>Profile</Route>
      </Routes>
      <div className='right-pane'>RightPne</div>

    </div>
  );
}

export default App;
