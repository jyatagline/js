// console.log("hello world")

// alert("hello world")

// let age = prompt("how old are you");
// alert(`you are ${age} years old `)
// let test = prompt("test")
// let test1 = prompt("Test"," ");
// console.log(test1)
// console.log(test);

// let boss = confirm("are you boss");
// alert(boss)

// let counter = 1;
// alert(2 * counter);
// counter++;

// function showMessage(){
//     alert("Hello everyone")
// }

// showMessage()

// function showMessage(){
//     let msg =   "Hello javasiptt";
//     alert(msg)
// }
// showMessage()
// alert(msg)



// let username = "Jay";

// function showMessage(){
//     username = "bob";

//     let message = "hello" + username;
//     alert(message);
// }
// alert(username)
// showMessage();
// alert(username)


// function showMessage(from, text){
//     alert(from + ":" + text)
// }

// showMessage('jay', "hey");
// showMessage('jay', "whatsapp");


// function showMessage(text){
//     if(text == undefined){
//         text = 'empty message';
//     }
//     alert(text)
// }
// showMessage("main meessage");

// function showMessage(count){
// alert(count ?? 'unknown')
// }

// showMessage(0);
// showMessage(null);
// showMessage();


// function sum(a,b){
//     return a + b;
// }
//   let result = sum(4,8)
//   alert(result)

let arr = [4,5,6,7,8]
// let arr2 = arr.reverse();
// console.log(arr2);
// delete arr[1];
// console.log(arr);
// console.log(arr.length);
arr.splice(2,2,7,8);
console.log(arr);


// let names = 'Bilbo Gandalf Nazgul'
// let newName = names.split(',')
// console.log(newName)

// for(let name of newName){
//     console.log(`a message to ${name}`)
// }
// let arr2 = [1,2,3,4,5]
// let arr3 = arr2.reduce((sum,current)=>sum + current)


// console.log(arr3);
const numbers = [1,2,3,4,5]
const newnumbers = numbers.map((val)=>{
    return val * 2;
})
console.log(newnumbers)


const number2 = numbers.filter((values)=>{
    return values > 2
}) 
console.log(number2)

const number3 = numbers.reduce((curr,acc)=>{
    return curr + acc;
},5)
console.log(number3)


const info = {
    firstName : "jay",
    lastNamew : "adhav",
    id : 22,
    fullName : function(){
        console.log(this.firstName + " " + this.lastNamew) 
    }
  
}
// console.log(info.fullName)


// let cars = ["bmw", "volvo", "honda"]

// let bikes = ["yamaha", "suzuki", "royal enfield"];


// let vehicles = [...cars,...bikes]
// console.log(vehicles)


// let num1 = [1,2,3,4,5]

// let num2 = num1.map(Double)

// function Double(value){
// return value * 2;
// }

// console.log(num2);

// let value = [1,2,3,4,5]
// let value2 = value.filter(greater)

// function greater(value){
//     return value >= 2
// }
// console.log(value2);


// let sum1 = [4,5,6,4,8,9]
// let sum2 = sum1.reduce(sum)

// function sum(curr,acc){
//     return curr + acc

// }

// console.log(sum2);



// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])

// console.log(cars.length)
// console.log(cars[cars.length-1]);

// cars.forEach((item,index,array)=>{
//     console.log(item,index,array)
// })

// const isBelow = [14,15,16,17,18,19]

// const isBelow2 = isBelow.every(check)

// function check(isBelow){
//     isBelow < 20;
// }
// console.log(isBelow2)
// const isBelow2 = isBelow.every((val)=>{
//      val < 20;
// })
// console.log(isBelow2)

// const checkBelow = (val)=>val<20;

// console.log(isBelow.every(checkBelow))


// function isBigEnough(val){
// return val > 10;
// }

// console.log([1,4,5,7,77,11].every(isBigEnough))
// console.log([11,12,13,14,15].every(isBigEnough))

// const subset = (arr1,arr2)=>arr2.every((ele)=>arr1.includes(ele))
// console.log(subset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]))
// console.log(subset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]))

// const myPromise2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("this is the eventual value the promise will return")
//     },300)
// })

// console.log(myPromise2)


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('this is the eventual value the promise will return');
//     }, 300);
//   });
  
//   console.log(myPromise);


//   const myPromise3 = new Promise((resolve,rej)=>{
//     setTimeout(()=>{
//         resolve("this is the eventual value the promise will return")
//     })
//   })

//   console.log(myPromise3)






// callback

// function mycalculator(num1, num2,mycallback){
// let sum = num1 + num2;
// mycallback(sum)
// }
// console.log(mycalculator(4,5))

// let a,b,rest;
// [a,b] = [10,20]
// console.log(a)
// console.log(b)

// const foo = ["one","two","three"]
// const [red,yellow,green] = foo
// console.log(red)
// console.log(yellow)
// console.log(green)

// let a = 1;
// let b = 2;
// [a,b] = [b,a]
// console.log(a)
// console.log(b)


// const user = {
//     id: 42,
//     isVerified: true
// }

// const {id,isVerified} = user;
// console.log(id)
// console.log(isVerified)


// const oo = {
//     p: 42,
//     q: true
// }
// const {p:foo,q:baar} = oo
// console.log(foo,baar)



// function myBio(firstName,lastName,...otherInfo){
//     return otherInfo;
// }

// console.log(myBio("jay","dshshjd","bdhsjb","dvgsdhjs","dfvd"))


// function printName(...value){
//     return value
// }
// console.log(printName("scfds","sdfsd","sdhhjs","wdsgh","wegshw"))

// function printValues(...inte){
//     return inte;
// }
// console.log(printValues(1,2,3,4,5,6))


// const {firstName,lastName,...otherInfo} = {
//     firstName : "jay",
//     lastName : "adhav",
//     companyName: "CodeSweetly",
//     profession: "Web Developer",
//     gender: "Male"
// }
// console.log(otherInfo);


// let text = "please locate where locate occurs"
// let ind = text.indexOf("locate")
// console.log(ind)




// async await


//  function showAvatar(){
//     fetch('https://jsonplaceholder.typicode.com/users')           //api for the get request
//   .then(response => response.json())
//   .then(data => console.log(data));
// }
// showAvatar();

// async function showAvatar(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let response2 = await response.json();
//     console.log(response);
//     return response2;

// }

// let response3 = showAvatar().then((response2)=>
// response2
// );
// console.log(response3)


// const API_URL = 'https://jsonplaceholder.typicode.com/users';
// async function fetchUsers() {
//  try{
//    const response = await fetch(API_URL)
//    const users = await response.json();
//    return users;
//   }catch(err){
//     console.error(err); 
//   }
// }
// fetchUsers().then(users => {
//     console.log(users) // fetched users
 
// });


// const api = ("https://jsonplaceholder.typicode.com/users")

// async function fetcching(){
//     try{
//         const response = await fetch(api);
//         const user = await response.json();
//         return user;

//     } catch(err){
//         console.log(err)
//     }
// }

// fetcching().then(users=>{
//     console.log(users)
// })

// const api = ("https://jsonplaceholder.typicode.com/users")

// async function fetchUsers(){
//     try{
//         const response = await fetch(api);
//         const user = await response.json();
//         return user;
//     }
//     catch(err){
// console.log(err)
//     }
// }
// fetchUsers().then(users=>{
//     console.log(users);
// })

// const api = ("https://jsonplaceholder.typicode.com/users")

// async function fetchUsers(){
//     try{
//         const response = await fetch(api)
//         const users = await response.json();
//         return users
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// fetchUsers().then(users=>{
    // console.log(users[0].name)
    // console.log(users[0].address.street)
    // console.log(users[0].phone)

    // for(let i=0;i<users.length;i++){
    //     console.log(users[i].name);
    //     console.log(users[i].address.street)
    //     console.log(users[i].phone)
    // }

//     users.map((user)=>{
//         console.log(user.name)
//         console.log(user.address.street)
//     })

    

// })


// const api = ("https://jsonplaceholder.typicode.com/users");

// async function fetchUsers(){
//     var response = await fetch(api);
//     var users = await response.json();
//     return users;

// }

// fetchUsers().then(users=>{
//     console.log(users);
//     users.map((user)=>{
//         console.log(user.name)
//         console.log(user.address.street)
//          document.getElementById("GFG")
//     .innerHTML +=`<p>${user.name}</p>`;
       
//     })
    


// })



// var userList = document.getElementsByClassName('users').textContent += 'user.name'

// document.getElementById("GFG")
//     .innerHTML +=`<p>${user.name}</p>`;


// var myVar = setInterval(myTimer, 1000);
      
// function myTimer() {
//     document.getElementById("GFG")
//     .innerHTML +="<p>Hi</p>";
// }
// console.log(myVar)

// localStorage.setItem("lastname", "Smith")


// function showData(){

//     const get =  localStorage.getItem("lastname")
// }




// let api = ("https://jsonplaceholder.typicode.com/users")


// async function fetchUsers (){
//     const response = await fetch(api)
//    const users = await response.json()

//    return( users)
//    console.log(users)
   
    
    
// }

// fetchUsers().then(users=>{
//     console.log(users)
// })


// let marks = [10,20,30,40,50];
// localStorage.setItem('numbers',JSON.stringify(marks));

// const stored = JSON.parse(localStorage.getItem("numbers"))

// // localStorage.clear()

// const myObj = {
//     name : "john doe",
//     age : 32,
//     gender : "male",
//     profession : "optician" 
// }

// localStorage.setItem('info',JSON.stringify(myObj.age))
// const storedInfo = JSON.parse(localStorage.getItem('info'))


// setTimeout(()=>{
// console.log("hii")
// },5000)

// setTimeout(()=>{
//     console.log("world")
// },3000)

// setTimeout(()=>{
//     console.log("how are you")
// },1000)



// // setInterval(()=>{
// //     console.log("jay")
// // },2000)


// setTimeout(() => {
//     console.log("efbdbf")
// }, 4000);


// const arr1 = [1,2,3,4,5,6];
// const arr2 = [4,5,6,8,9,7];

// const arr3 = [...arr1,...arr2]
// console.log(arr3)

// const [one,two,thre,...left] = arr3
// console.log(one);
// console.log(left);
// console.log(two) 


// const obj = {
//     first : "first",
//     second : "second",
//     third : "thhird"
// }
// console.log(obj.first);
// console.log(obj.second);
// console.log(obj.third);
// for(let x in obj){
//     console.log(x);
// }


// const arr4 = [1,2,3,4,5,6,3,8]

// arr4.forEach(element => {
//     console.log(element)
// });

// arr4.map((ele)=>{
//     console.log(ele)
// }).filter((ele)=>{
//     console.log(ele<3)
// })



// const fake_api = ('https://jsonplaceholder.typicode.com/users')

// async function demo(){
//     let response = await fetch(fake_api);
//     let user = await response.json();
//     return user;
// }

// demo().then(users=>{
//     console.log(users)
// })


// let newuser1 = {
//     name: 'John',
//   age: 30
// };
// alert(count(newuser1));


// localStorage.setItem('name','jay')
// localStorage.getItem('name')


let income = {
    "John": 100,
  "Pete": 300,
  "Mary": 250
}

// function incomes(vlaue){
// let sum = 0;
// for(let x of Object.values(vlaue)){
//     sum += x;
// }
// return sum
// }

// console.log(incomes(income))

for(let x of Object.values(income.John)){
    console.log(income.John)
}

