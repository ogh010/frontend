import React,{useState} from 'react';

function App() {
    let[count,setCount]=useState(0);
    const add = () =>{
        setCount(++count)
    }

    return (
        <div style={{textAlign:'center'}}>
            <h1>{count}</h1>
            <button onClick={add}>클릭</button>
        </div>
    );
};

export default App;