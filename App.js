import React ,{useState} from 'react';
import DisplayName from './components/DisplayName.js';

const App = ()=>{
 const[fullName,setFullName]= useState(" Subham Mallick");

 const[count,setCount]=useState(0);
  const Increase =()=>{
    setCount(count+1);
  }

  const Decrease =()=>{
    setCount(count-1);
  }

  return(
    <div>
      <DisplayName fullName = {fullName}/>
      <h3>
        Let's Count
      </h3>
      <h1>{count}</h1>
      <button onClick={Increase}>Increase</button>
      <br/>
      <button onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default App;
