import React from 'react'

function Router() {
  const t1 = "import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom'";
  const t2 = `
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
  `  ;
  return (
    <dl>
        <dt>Router</dt>
        <dd>1. 모듈설치(npm i react-router-dom)</dd>
        <dd>2. App.js 모듈 가져오기({t1})<br/>
            ㄴ 자동완성(imrr)
        </dd>
        <dd>3.작업방법 <br/>
            ㄴ NavLink컴포넌트을 a태그처럼 사용하면된다.<br/>
            ㄴ 메뉴 클릭시 다른 컴포넌트로 교체<br/>
            ㄴ 브라우저 주소값과 path값이 일치할때 컨포넌트가 화면에 출력
            <br />
            <textarea cols="100" rows="25">{t2}</textarea>
        </dd>
    </dl>
  )
}

export default Router