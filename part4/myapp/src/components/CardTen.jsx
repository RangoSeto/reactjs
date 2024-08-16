// import React,{useState} from "react";

// export default function CardTen(){

//     let counter = 1;

//     const counterarrs = useState(0);

//     // console.log(counterarrs); // (2) [0, ƒ]
//     // console.log(counterarrs[0]); // 0
//     // console.log(counterarrs[1]); // function () { [native code] }

//     const counterState = counterarrs[0]; // getter
//     const setCounterState = counterarrs[1]; // setter
//     // console.log(counterState); // 0
//     // console.log(setCounterState); // function () { [native code] }




//     const handleClick = ()=>{
//         // console.log("i am working");

//         // counter++;
//         // console.log(counter); // increment in console, DOM ui doesn't increase! , thus why we need useState

//         setCounterState(counterState + 1);
//     }

//     return (
//         <div>
//             <p>{counter}</p>
//             <p>{counterState}</p>
//             <button onClick={handleClick}>Add Now</button>
//         </div>
//     )
// }







// can't use useState in class Component , IN Class Component we use State(written in constructor)

import React from "react";

class CardTen extends React.Component{

    constructor(){
        super();
        this.state = {
            counter:1
        }
    }


    handleClick = ()=>{
        // console.log("i am working");

        this.state.counter++;
        // console.log(this.state.counter); // increment in console, DOM ui doesn't increase! , thus why we need state

        this.setState({
            counter:this.state.counter
        })
    }


    render(){

        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.handleClick}>Add Now</button>
            </div>
        )
    }
}

export default  CardTen;

// handleClick ကို render အပြင်မှာရေးရင် this.handleClick ဆိုပြီးပြန်ခေါ်ပေးရမယ်
// this.state.counter => getter 
// this.setState() => setter 