import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom'
import Deploy from './page/Deploy';
import Home from './page/Home';
import Router from './page/Router';
import StateProps from './page/StateProps';
import Css from './page/Css';

import './Style.scss';


function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/css">CSS</NavLink>
        <NavLink to="/router">Router</NavLink>
        <NavLink to="/stateprops">State&Props</NavLink>
        <NavLink to="/deploy">Deploy</NavLink>
      </header>
      <main>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/css" element={<Css />} />
          <Route path="/router" element={<Router />} />
          <Route path="/stateprops" element={<StateProps />} />
          <Route path="/deploy" element={<Deploy />} />          
        </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;
