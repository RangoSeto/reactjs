// import React,{useState} from "react";

// export default function CardEleven(){

//     let idx = 1;

//     const idxarrs = useState(idx);

//     const idxState = idxarrs[0];
//     const setIdxState = idxarrs[1]; 



//     const handleClick = ()=>{
//         setIdxState(idxState + 1);
//     }

//     return (
//         <div>
//             <p>{idxState}</p>
//             <button onClick={handleClick}>Click Here</button>
//         </div>
//     )
// }









// import React from "react";

// class CardEleven extends React.Component{

//     // constructor(){
//     //     super();
//     //     this.state = {
//     //         idx:1
//     //     }
//     // }


//     // if you don't want to use constructor, it's ok
//     state = {
//         idx : 10
//     }


//     handleClick = ()=>{
//         this.state.idx++;

//         this.setState({
//             counter:this.state.idx
//         })
//     }


//     render(){

//         return (
//             <div>
//                 <p>{this.state.idx}</p>
//                 <button onClick={this.handleClick}>Add Now</button>
//             </div>
//         )
//     }
// }

// export default  CardEleven;









import React from "react";

class CardEleven extends React.Component{

    // constructor(){
    //     super();
    //     this.state = {
    //         idx:1
    //     }
    // }

    
    // if you don't want to use constructor, it's ok
    state = {
        idx : 1
    }


    render(){

        const handleClick = ()=>{
            this.state.idx++;
    
            this.setState({
                counter:this.state.idx
            })
        }

        return (
            <div>
                <p>{this.state.idx}</p>
                <button onClick={handleClick}>Add Now</button>
            </div>
        )
    }
}

export default  CardEleven;


