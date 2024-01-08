import { useState , useEffect } from 'react';
// import React {useState} from 'react';
import './App.css';
import Pratice from './Pratice'
import TestEffect from './TestEffect';
import Timepass from './timepass';



function App() {
  const[counter,setcounter]=useState(9)
const increasecount=()=>{
  setcounter(counter + 1)
}
const decreasecount=()=>{
  setcounter(counter -1)
}

let names=[{firstname:"srikanth"},]  
 
//DEstructing

// const calculate=(a,b)=>{

//   const add=a+b;
//   const sub=a-b;
//   const mul=a*b;
//   const div=a/b;
//   return [add,sub,mul,div]
// }
// const[add,sub,mul,div]=calculate(5,7)

// document.write("<h2>Sum: " + add + "</p>");
// document.write("<p>Difference " + sub + "</p>");
// document.write("<p>Product: " + mul + "</p>");
// document.write("<p>Quotient " + div + "</p>");

const num=[1,2,3,4,5,6,7,8,9]
const num1=[10,11,12,13,14,15,16,17,18,19]
console.log(...num,...num1)


const myclick=()=>{
  alert("these is while clicking the button from react js")
}



// terenary Operator


const increase= 10>10 ? "15 is greater":"10 is Greater";
console.log(increase)



// filter

const filters=[{
  name:"srikanth",
  age:34,
},
{
  name:"nandhini",
  age:23
},
{
name:"barcode",
age:20
}
]
filters.filter((items) => {
  console.table(items.age < 30)
})







const [color,setColor]=useState("99")

const changecolor=()=>{
  setColor("blue")
}
const effect=useEffect(()=>{
  console.log("srikanth i am srikanth")
} ,[])


  return (
   <>
   <button type="button" onClick={increasecount}>Increase count</button><br/><br/>
   <button type="button" onClick={decreasecount}>Decrease count</button><br/><br/>

   <p>the Count value is : {counter}</p>

   {/* {names.map((items)=><p> {items}</p>

  )} */}

  {/* Destructing the values */}



  <button type='button'onClick={myclick}> click me</button>



{names.map((names1) =>{
  return <Pratice name={names1.firstname}/>
})}



  

<h1>these color is {color}</h1>
<button on onClick={changecolor}> Change color</button>

   <h1>{effect}</h1>

   <TestEffect></TestEffect>
   <Timepass></Timepass>
   
   </>
  );
}

export default App;
