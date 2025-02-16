import React from 'react'

const generateArray = (n) => Array(n).fill().map((item,index)=>1+index)

const generateArrayFromAtoB=(a,b)=> Array.from(generateArray(b-a+1),item=>+ item + - 1 + +a)

const squaredElements=(arr)=> Array(arr.length).fill().map((item,index)=>Math.sqrt(arr[index]).toFixed(2))

class Input extends React.Component{
      constructor(props) {
        super(props);
        this.state={a:0, b:0, arr:[], squared:[]};
        this.counter=0;
        this.handleClick = this.handleClick.bind(this)
      }

     changea(ev){
        this.setState({a: ev.target.value}, ()=>{console.log("Value of a was changed to " + this.state.a );
        if((Number(this.state.a) < Number(this.state.b))&&this.state.a>0){
            this.setState({arr:generateArrayFromAtoB(this.state.a,this.state.b)});
             }
        else {
            this.setState({arr:[]});
            }
        });
     }
     changeb(ev){
        this.setState({b: ev.target.value}, ()=>{console.log("Value of a was changed to " + this.state.b);
        if((Number(this.state.a) < Number(this.state.b))&&this.state.a>0){
            this.setState({arr:generateArrayFromAtoB(this.state.a,this.state.b)});
            }
        else {
            this.setState({arr:[]});}
        });
      }
     handleClick(){
            this.setState({squared:squaredElements(this.state.arr)});

     }

     render(){
     return(
     <div>
     {console.time("Render"+this.counter)}
         <h1>LAB_2</h1>
         <h2>Input 1({this.state.a}):</h2>
         <input type="number" pattern="[0-9]*" placeholder="Only numbers" onChange={this.changea.bind(this)}/>
         <h2>Input 2({this.state.b}):</h2>
         <input type="number" pattern="[0-9]*" placeholder="Only numbers" onChange={this.changeb.bind(this)}/>
         <p>{this.state.arr.map(item=>item+ " ")}</p>
         <button onClick={this.handleClick}>Process Array</button>
         <p>{ this.state.squared.map(item=>item + " ")}</p>
     {console.timeEnd("Render"+this.counter++)}
     </div>
     );
     }
}

class AppTitle extends React.Component{
    render(){
    return(
    <div>
    <Input />
    </div>
    );
    }
}

export default AppTitle