let nameEle = document.getElementsByClassName('name');
let nameess = document.querySelector('.name')
let uernameEle = document.querySelector('.username')
// console.log(names)

let api_data =
    ("https://jsonplaceholder.typicode.com/users")

async function getUsers() {
    const response = await fetch(api_data);
    const user = await response.json();
    return user;

}

getUsers().then(user => {
    console.log(user);
    console.log(user[0].name)

    // nameess.innerHTML =`${user[0].name}`
    // nameess.innerHTML =`${user[1].name}`

    for (let i = 0; i < user.length; i++) {
        console.log(user[i].name)
        nameess.innerHTML += `<p>${user[i].name}</p>`
        uernameEle.innerHTML += `<p>username :- &nbsp${user[i].username}</p>`
        
        

    }




})

const usersList = ["dfmf","djkjkf","kdklk","lekdk"]
// const newUsers = users.pop();
// const newUsers2 = users.unshift("");
// const newUsers3 = users.shift();
// console.log(users)

function newUsers(val){
    console.log(val)
    return val

}

console.log(usersList.map(newUsers))

let url = ("https://jsonplaceholder.typicode.com/users")

async function extract(){
const response = await fetch(url)
const users = await response.json();
return users
}
extract().then(val=>{
    console.log(val)
})

