import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import LeftMenu from './components/LeftMenu';
import MainComponent from './components/MainComponent';
import Player from './components/Player';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
      <div className='top-section col-12'>
        <div className='row g-0'>
          <div className='left col-3'><LeftMenu /></div>
          <div className='main col'>
            <Route path='/home' exact component={MainComponent} />
            <Route path='/search' exact component={SearchBar} />
          </div>
        </div>
        <Player />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
