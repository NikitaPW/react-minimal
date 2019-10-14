import React from 'react'

const generateArray = (n) => {return Array(n).fill().map((item,index)=>1+index)}

const generateRandomNumbers=()=>{return Array(25).fill().map(item =>Math.floor(Math.random() * 25) + 1 )}

const squaredElements=(arr)=>{return Array(arr.length).fill().map((item,index)=>arr[index]*arr[index])}


class AppTitle extends React.Component{
    render(){
    const arr = generateArray(10);
    const arrRand = generateRandomNumbers();
    const arrGiven1 = [2,56,23,88,17,4];
    const arrGiven2 = [2,5,8,10];
    const squared = squaredElements(arrGiven2);
    return(
    <div>
    <h2>Array from 1 to n</h2>
    <div>{arr.map(item=> item + " ")}</div>
    <h2>Arrays out of 25 random numbers</h2>
    <div>{arrRand.map(item=>item + " ")}</div>
    <h2>Elements that are larger then 15</h2>
    <div>{arrGiven1.map(item =>item+" ").filter(item=>{return(item>15)})}</div>
    <h2>Array with squared elements</h2>
    <div>{squared.map(item =>item+" ")}</div>
    </div>
    );
    }
}

export default AppTitle