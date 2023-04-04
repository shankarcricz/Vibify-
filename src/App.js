import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import SearchBar from './components/SearchBar';
import {BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SongList from './components/SongList';


function App() {
  return (
    <>
      <BrowserRouter>
          <Route path="/login" exact component={Login} />
      </BrowserRouter>
      <SearchBar />
      <SongList />
    </>
  );
}

export default App;
