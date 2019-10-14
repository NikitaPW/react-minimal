import React from 'react'

const generateArray = (n) => {return Array(n).fill().map((item,index)=>1+index)}

class AppTitle extends React.Component{
    render(){
    const arr = generateArray(10);
    return(
    <div>
    <div>{arr.map(item=> item+" ")}</div>
    </div>
    );
    }

}

export default AppTitle