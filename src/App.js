import React, { useState } from "react";
import mockData from './mockData.json';
function App() {
  const [searchItem, setSearchItem] = useState('');
  console.log("searchItem",searchItem)
  return (
    <div className="App">
      <input type="text" placeholder="searc..." id="inputTag" onChange={(e)=>setSearchItem(e.target.value)}/>
    {mockData.filter(val=>{
      if(searchItem==='')return val;
      else if(val.first_name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())){
        return val;
      }
    }).map((data)=>{
      return( <div className="firstName">{data.first_name}</div>)
     
    })}
    </div>
  );
}

export default App;
