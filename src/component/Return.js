import React from "react";

const Text = () => {
//     return(
//         <div>
//             <h1>hello adarsh</h1>
//         </div>  
//     )

    return React.createElement('div',null,React.createElement('h1',{
        id : 'new',
        className : 'Dummy'
    },"hey buoy"))
}
export default Text