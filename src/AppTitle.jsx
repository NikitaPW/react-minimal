import React from 'react'

const generateArray = (n) => {return Array(n).fill().map((item,index)=>1+index)}

const generateRandomNumbers=()=>{return Array(25).fill().map(item =>Math.floor(Math.random() * 25) + 1 )}

const squaredElements=(arr)=>{return Array(arr.length).fill().map((item,index)=>arr[index]*arr[index])}

const data =[
              {
                "teacherName": "Jan Nowak",
                "teacherAge": 36,
                "active": true,
                "students": [
                  {
                    "name": "Maciej Janosz",
                    "age": 12
                  },
                  {
                    "name": "Wojciech Kowalski",
                    "age": 15
                  },
                  {
                    "name": "Wioletta Poznańska",
                    "age": 1000000
                  }
                ]
              },
              {
                "teacherName": "Mariusz Flasinski",
                "teacherAge": 56,
                "active": true,
                "students": [
                  {
                    "name": "Jan Kot",
                    "age": 12
                  },
                  {
                    "name": "Jan Ziobro",
                    "age": 15
                  },
                  {
                    "name": "Adam Malysz",
                    "age": 41
                  }
                ]
              },
              {
                "teacherName": "Wojciech Kuzak",
                "teacherAge": 44,
                "active": false,
                "students": [
                  {
                    "name": "Janina Wronska",
                    "age": 22
                  },
                  {
                    "name": "John Dover",
                    "age": 7
                  },
                  {
                    "name": "Emil Petterson",
                    "age": 46
                  }
                ]
              }
            ]


 function showStudents(){
        if(document.getElementById('showStudents').innerHTML==""){
            data.forEach(item=>{item.students.forEach(i=>{document.getElementById('showStudents').innerHTML+="<li>"+i.name+"</li>"})});
        }else{
            document.getElementById('showStudents').innerHTML=""
            data.forEach(item=>{item.students.forEach(i=>{document.getElementById('showStudents').innerHTML+="<li>"+i.name+"</li>"})});

        }
    }

function sortStudents(){
        var Students=[];
        data.forEach(item => {
            item.students.forEach(i=>{Students.push(i.name)});
        });
        Students.sort();
        if(document.getElementById('showStudents').innerHTML==""){
            Students.forEach(item =>document.getElementById('showStudents').innerHTML+="<li>"+item+"</li>");
        }else
        {
            document.getElementById('showStudents').innerHTML="";
            Students.forEach(item =>document.getElementById('showStudents').innerHTML+="<li>"+item+"</li>");
        }
}

function oldStudents(){
        var Students=[];
        data.forEach(item => {if(item.active){item.students.forEach( i =>
        {
        if(i.age>20)
            Students.push(i.name)
        })
        }});
        if(document.getElementById('showStudents').innerHTML==""){
             Students.forEach(item =>document.getElementById('showStudents').innerHTML+="<li>"+item+"</li>");
        }else
        {
             document.getElementById('showStudents').innerHTML="";
             Students.forEach(item =>document.getElementById('showStudents').innerHTML+="<li>"+item+"</li>");
        }


}

function showarray(){
        if(document.getElementById('showarray').innerHTML==""){
            data.forEach(item=>{item.students.forEach(i=>{document.getElementById('showStudents').innerHTML+="<li>"+i.name+"</li>"})});
        }else{
            document.getElementById('showStudents').innerHTML=""
            data.forEach(item=>{item.students.forEach(i=>{document.getElementById('showStudents').innerHTML+="<li>"+i.name+"</li>"})});

        }
    }

const generateArrayFromAtoB=(a,b)=>{ return Array.from(generateArray(b-a+1),item=>+ item + - 1 + +a)}

class Input extends React.Component{
      //generateArrayq=(a,b)=>{ return Array(b-a).fill().map((item,index)=>1+index)}
      constructor(props) {
        super(props);
        this.state={a:0, b:0, arr:[]};
      }

     changea(ev){
        this.setState({a: ev.target.value}, ()=>{console.log("Value of a was changed to " + this.state.a );
        if(this.state.a < this.state.b&&this.state.a>0)
            this.setState({arr:generateArrayFromAtoB(this.state.a,this.state.b)});
        else {
            this.setState({arr:[]});}
        });
     }

     changeb(ev){
        this.setState({b: ev.target.value}, ()=>{console.log("Value of a was changed to " + this.state.b);
        if(this.state.a < this.state.b&&this.state.a>0)
            this.setState({arr:generateArrayFromAtoB(this.state.a,this.state.b)});
        else {
            this.setState({arr:[]});}
        });
      }

     render(){
     const squared = squaredElements(this.state.arr);
     return(
     <div>
         <h1>LAB_2</h1>
         <h2>Input 1({this.state.a}):</h2>
         <input type="number" pattern="[0-9]*" placeholder="Only numbers" onChange={this.changea.bind(this)}/>
         <h2>Input 2({this.state.b}):</h2>
         <input type="number" pattern="[0-9]*" placeholder="Only numbers" onChange={this.changeb.bind(this)}/>



     </div>
     );
     }
}
//handle event
//set state
//rerender

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