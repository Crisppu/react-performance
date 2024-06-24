/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import UseMemoAndUseCallback from './components/HookUseMemoCallback/UseMemoAndUseCallback.jsx'
//import App1 from './components/HookUseMemoCallback/UseMemoHook.jsx'
//import NamesRandom from './components/React.memo/NamesRandomMemo.jsx'
//import MemoizedMyComponent from './components/React.memo/borrar.jsx'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <NamesRandom></NamesRandom> */}
      {/* <MemoizedMyComponent name="Juan" age={20}></MemoizedMyComponent>  */}
      {/* <App1></App1> */}
      <UseMemoAndUseCallback></UseMemoAndUseCallback>
    </>
  )
}

export default App
