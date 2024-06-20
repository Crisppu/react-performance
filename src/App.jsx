/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import MemoizedMyComponent from './components/React.memo/MemoIzedMyComponent.jsx'
import NamesRandom from './components/React.memo/NamesRandomMemo.jsx'
//import NamesRandom from './components/React.memo/NamesRandomMemo.jsx'
//import MemoizedMyComponent from './components/React.memo/borrar.jsx'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NamesRandom></NamesRandom>
      <MemoizedMyComponent name="Juan" age={20}></MemoizedMyComponent>
    </>
  )
}

export default App
