// import React,{useState} from "react";

// function CardFourteen(){


//     const [firstname,setFirstname] = useState();
//     const [lastname,setLastname] = useState();


//     const firstnamechangeHandler = (e)=>{
//         setFirstname(e.target.value);
//     }

//     const lastnamechangeHandler = (e)=>{
//         setLastname(e.target.value);
//     }

//     return (
//         <div>

//             <form action="" method="">

//                 <div>
//                     <label htmlFor="firstname">First Name</label>
//                     <input type="text" name="firstname" id="firstname" onChange={firstnamechangeHandler} />
//                     <span>{firstname}</span>
//                 </div>

//                 <div>
//                     <label htmlFor="lastname">Last Name</label>
//                     <input type="text" name="lastname" id="lastname" onChange={lastnamechangeHandler} />
//                     <span>{lastname}</span>
//                 </div>

//             </form>

//         </div>
//     )
// }

// export default CardFourteen;







import React,{useState} from "react";

class CardFourteen extends React.Component{


    constructor(){
        super();
        this.state = {
            firstname:'',
            lastname:'',
        }
    }


    render(){

        const firstnamechangeHandler = (e)=>{

            this.setState({
                firstname:e.target.value,
                lastname:e.target.value,
            });
        }

        const lastnamechangeHandler = e=>{

            this.setState({
                firstname:e.target.value,
                lastname:e.target.value,
            });
        }

        
        return (
            <div>

                <form action="" method="">

                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" id="firstname" onChange={firstnamechangeHandler} />
                        <span>{this.state.firstname}</span>
                    </div>

                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" id="lastname" onChange={lastnamechangeHandler} />
                        <span>{this.state.lastname}</span>
                    </div>

                </form>

            </div>
        )
    }

}


export default CardFourteen;





