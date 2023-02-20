
let getUser = JSON.parse(sessionStorage.getItem('user'));

if(!getUser){
    window.location = "login.html";
}
let setName = document.getElementById('userName');

let userName = JSON.parse(sessionStorage.getItem('user'));


setName.innerHTML = userName.name.toUpperCase()

