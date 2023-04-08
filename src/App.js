import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import LeftMenu from './components/LeftMenu';
import MainComponent from './components/MainComponent';


function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
      </BrowserRouter>
      <div className='top-section col-12'>
        <div className='row g-0'>
          <div className='left col-3'><LeftMenu /></div>
          <div className='main col'><MainComponent /></div>
        </div>
      </div>
    </>
  );
}

export default App;
