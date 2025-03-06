import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color , setColor] = useState('cyan')
  // function changeColor(color){
  //   setColor(color)
  // }
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor('white')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor:'white'}}
          >white</button>
          <button
          onClick={() => setColor('red')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor:'red'}}
          >red</button>
        </div>
      </div>
    </div>    
  );
}

export default App;
