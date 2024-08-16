// import React from "react";

// => this is functional component (build with function) [need to do = return]
// function CardOne(){
//     return <h3>I am card one</h3>
// }

// export default CardOne;



// import React from "react";

// function CardOne(){
//     return React.createElement(
//         'h1',
//         null,
//         "I am card one"
//     )
// }

// export default CardOne;




import React from "react";

// => class component (build with class) [need to do = extends , render , return]
class CardOne extends React.Component{
    render(){
        return <h3>I am card one</h3>
    }
}

export default CardOne;


