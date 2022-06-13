import NavBar from './components/NavBar.class.js';
import SlideBulle from './components/SlideBulle.class.js';
import Post from './components/Post.class.js';
import AsideBar from './components/AsideBar.class.js';
import "./App.css";
import React from 'react';
function App() {
  return (
    <div className="App">
     <header><NavBar/></header> 
      <div className='main'>
        <div className='container'>
          <div className='container-L'>
            <SlideBulle/>
            <Post name={'tomLl'} img={'https://picsum.photos/200/300?random=2'} />
            <Post name={'anna_wiz'}img={'https://picsum.photos/200/301'} />
          </div>
          <div className='container-R'>
            <AsideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
