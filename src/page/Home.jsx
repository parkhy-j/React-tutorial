import React from 'react'

function Home() {
  return (
    <dl>
        <dt>프로젝트 생성 및 실행</dt>
        <dd>1. 스크립트 실행 규칙 변경(set-executionpolicy remotesigned)</dd>
        <dd>2. 비주얼 코드(react폴더 열기)</dd>
        <dd>3. 프로젝트 생성 모듈 설치(npx create-react-app)</dd>
        <dd>4. React 프로젝트 생성(npx create-react-app tutorial) <br/>
            ㄴ 생성된 폴더로 이동(cd tutorial) <br/>
            ㄴ 프로젝트 실행(npm start)
        </dd>
    </dl>
  )
}

export default Home