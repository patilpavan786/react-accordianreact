import React, { useState } from "react";
// import ReactDOM from "react-dom";

import "./style.css";

export default function App() {
  // State to show/hide accordion
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);


  return (
    <div className="app">
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow(!show)}>
          <div>1. Explain let , var and const in details</div>
          <div className="sign">{show ? '-' : '+'}</div>
        </div>
        {show && (
          <div className="accordian-body">
           var = it is global scope/functional scope  variable, we can change  values as well as keys ,
     we can re-declare this variable 
     it is global scope when written out side of the function ,
    and it is a functional scope when declared inside the function .
 let = its is block scope variable , we can't change his key
     but we can change the value of that variable 
 const= its is also block scope variable , we can't change key as well 
      as value of this variable 
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow1(!show1)}>
          <div>2. What is Arrow function ? Explain difference between normal function and arrow function ?
it is introduce in es6</div>
          <div className="sign">{show1 ? '-' : '+'}</div>
        </div>
        {show1 && (
          <div className="accordian-body">
no argumnt is present in arrow function
  arrow function / fat arrow function , it is short length functional syntax than traditional function 
  the main differnce between fat arrow function and normal function is 
  1. legnth of the syntax is shorter than normal function
 2. normal function is using function key word , and fat arrow  function takes the operator
3 .normal function can be use with new key word as we want but arrow function dont't take new key word
4 .  regular functions allow us to use duplicate named parameters. But in strict mode, it is not allowed. 
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow2(!show2)}>
          <div>3. Explain useState hook ?</div>
          <div className="sign">{show2 ? '-' : '+'}</div>
        </div>
        {show2 && (
          <div className="accordian-body">
    
 useState is basically the hook given by the react itself , 
it  give two things 1 is getter function and setter function , it accespts the default value 
we can change the variable with the setter function so is also known as setstate , 
we can use getter function to read the only value to set the value we have to set the 
 value with help of setter function , 
basic syntax is as follow ;-   const[islogin,setIsLogin]=useState(0);   
this is the basic syntax for the usestate
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow3(!show3)}>
          <div>4. Explain props and states .(differentiate them )</div>
          <div className="sign">{show3 ? '-' : '+'}</div>
        </div>
        {show3 && (
          <div className="accordian-body">
         props ;- props is basically the data come from the parent component to child component ,
  props are immutable in nature
 or the data come from the outside of the function , the props are only readable ,
 we cannot change the value , to change the value we have to convert the props in state which is known as 
derived state 
state;- state is basically the data avaiable inside the function itself ,
states are mutable in nature we can change the data of the state
 varibale with help of set state and also read the data with help of getter 
state are managable,  but props has advantage over the state is it has trasnferr the value from 1 fuction 
to other
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow4(!show4)}>
          <div>5. What is react and why react ?</div>
          <div className="sign">{show4 ? '-' : '+'}</div>
        </div>
        {show4 && (
          <div className="accordian-body">
      react is basically the js library which is use to build the ui components which are re usable 
we can re use the component as many times we want in the react , 
react is base on the virtual dom concept   What is meant by virtual DOM?
A virtual DOM is a lightweight JavaScript representation of the Document Object Model 
 used in declarative web frameworks such as React, Vue. js, and Elm.
 Updating the virtual DOM is comparatively faster than updating the actual DOM
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow5(!show5)}>
          <div>6. What is the way to pass props?

</div>
          <div className="sign">{show5 ? '-' : '+'}</div>
        </div>
        {show5 && (
          <div className="accordian-body">
       ans;- React components use props to communicate with each other. Every parent component can pass some information
 to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any
 JavaScript value through them, including objects, arrays, and functions.
There are 2 ways to do this.:=
1st is from parnt to child which is  known as prop drilling 
2nd is child to parent known as lifting state up
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow6(!show6)}>
          <div>7. What is the component?



</div>
          <div className="sign">{show5 ? '-' : '+'}</div>
        </div>
        {show6 && (
          <div className="accordian-body">
Components are independent and reusable bits of code which we can create in in react ,
 and main advantage is that it is re-usable we  don't have to create again  and again the same code 
 Components come in two types, Class components and Function components;
compoenent basically make code easy to understand and easy to managanle in the system
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow7(!show7)}>
          <div>8. Explain useEffect?

</div>
          <div className="sign">{show5 ? '-' : '+'}</div>
        </div>
        {show7 && (
          <div className="accordian-body">
useEffect is basically the hook which is provided by the react , and mainly use to perform the sideeffect , so what is a side effect 
it is just the things we want to do after the rendering of main function 
use effect itself is a function and accept othe rfunction as an input and it also accept the dependancy aarray where we pass the variable
 when we want to run the use effect 
. Side Effect Runs After Every Render. The first is the default case. If you do not pass the dependency array to the useEffect hook,
 the callback function executes on every render.

          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow8(!show8)}>
          <div>9.  What is jsx?Why are we using it?Will it be ok if we don't use jsx?Is it understable by browser?



</div>
          <div className="sign">{show5 ? '-' : '+'}</div>
        </div>
        {show8 && (
          <div className="accordian-body">
JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together. This is simple JSX code in React. 
But the browser does not understand this JSX because it's not valid JavaScript code. This is because we're assigning an HTML tag to
 a variable that is not a string but just HTML code.
 You are not required to use JSX, but JSX makes it easier to write React applications.
React, ES6, JavaScript, EJS, and Python are the most popular alternatives and competitors to JSX.
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow9(!show9)}>
          <div>10...What is public folder in react used for and what is package.lock.json file ?

</div>
          <div className="sign">{show5 ? '-' : '+'}</div>
        </div>
        {show9 && (
          <div className="accordian-body">
Basically public folder is responsible for rendering what
we write inside in our index.js because we have given id='root'
in our index.html file and we are accessing that id in our 
index.js file using document.getElementById('root').Package.
lock.json files contains all the dependencies that is already
 install by react and also contains dependencies that is 
install by the developer.
          </div>
        )}
      </div>
    </div>
  );
}

