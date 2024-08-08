import './App.css'
import Body from './components/Body';
import Header from './components/Header';
import Maincontainer from './components/Maincontainer';
import store from './utils/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Provider } from 'react-redux';
import Detail from './components/Detail';
function App() {
  return (
    <Provider store={store}>

   
<Router>
  <Header/>
      <Routes>
        <Route path="/" element={<Body/>}>
        <Route path='/' element={<Maincontainer/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        </Route>
      </Routes>
</Router>
    </Provider>
  );
}

export default App;
