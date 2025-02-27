// 총괄 js
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom'

import Deploy from './page/Deploy';
import Router from './page/Router';
import Home from './page/Home';
import StateProps from './page/StateProps';
import Css from './page/Css';

import './Style.scss';
//데려오기

function App() {

  return (
    <>
      <BrowserRouter basename='/react_tutorial'>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/css">CSS</NavLink>
        <NavLink to="/router">Router</NavLink>
        <NavLink to="/stateprops">State&Props</NavLink>
        <NavLink to="/deploy">Deploy</NavLink>
      </header>
      <main>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/css" element={<Css />}/>
          <Route path="/router" element={<Router/>}/>
          <Route path="/stateprops" element={<StateProps />}/>
          <Route path="/deploy" element={<Deploy/>}/>
        </Routes>
      </main>
      </BrowserRouter>
    </>
  );
}

export default App;
//내보내기 1개만 내보낼때 default를 넣어줌