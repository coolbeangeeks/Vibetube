import './App.css'
import Body from './components/Body';
import Header from './components/Header';
import Maincontainer from './components/Maincontainer';
import Sidebar from './components/Sidebar';
import store from './utils/store';
import {Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>

   
    <div className=''>
      <Header/>
      <Body/>
      
    </div>
    </Provider>
  );
}

export default App;
