
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import Productx from "./Productx";

function App() {
  var [a,b] = useState(69);
  return (
    <div className="w-full h-screen bg-zinc-900 p-4">
      <div className="w-44 h-32 rounded-xl bg-red-600 p-3 text-white">
      <h1>{a}</h1>
      </div>
     
      <Productx naam="value++"/>
    </div>
  )
}

export default App