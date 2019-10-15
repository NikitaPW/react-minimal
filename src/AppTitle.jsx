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
    <h2>Students</h2>
    <button onClick={showStudents}>Show students</button>
    <button onClick={sortStudents}>Sort students</button>
    <button onClick={oldStudents}>Old students</button>
    <ul id="showStudents"></ul>

    </div>

    );
    }
}

export default AppTitle