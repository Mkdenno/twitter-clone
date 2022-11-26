import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Leftpane } from './components';
import Home from './components/pages/home/Home';

const App = () => {
  return (
    <div className="app">
      <div>
      <Leftpane className="left-pane"/>
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/explore' exact>Explore</Route>
      <Route path='/notifications' exact>Notifications</Route>
      <Route path='/messages' exact>Messages</Route>
      <Route path='/bookmarks' exact>Bookmarks</Route>
      <Route path='/lists' exact>Lists</Route>
      <Route path='/profile' exact>Profile</Route>
      </Routes>
      <div className='right-pane'>
        <h1>Trends for you</h1>
      </div>

    </div>
  );
}

export default App;
