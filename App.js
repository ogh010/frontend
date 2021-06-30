import React,{useState} from 'react';

function Counter() {
    let[count,setCount]=useState(0);
    const add = () =>{
        setCount(++count)
    }

    return (
        <div style={{textAlign:'center'}}>
            <header>오가희</header>
            <h1>{count}</h1>
            <button onClick={add}>클릭</button>
            <footer>ogh010@github.com</footer>
        </div>
    );
};

export default Counter;