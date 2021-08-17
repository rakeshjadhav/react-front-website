import React from 'react';

class A extends React.Component{
   render() {
       return(
           
        <div className="demo">
            <h1>class A hereeeee !!!!</h1>
        </div>
       )
   };
}

function Demo(){
    return(
        <div className="">
            <h2>test function Component hereeeee !!!</h2>
            <A />
        </div>
    )
}
export default Demo;