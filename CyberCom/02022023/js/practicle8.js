let email = document.getElementById("email");
let reEmail = document.getElementById("reEmail");
let password = document.getElementById("password");
let rePassword = document.getElementById("rePassword");
let phone = document.getElementById("phone")
let msg = document.getElementById("msg");

// let myform=document.getElementsByName("");
let data = document.getElementById("data");

// let check = (event) => {
    
// if(email.value!=reEmail.value){
//     msg.innerHTML="please enter same email";
// return false;
// }
// if(password.value!=rePassword.value){
//     msg.innerHTML="please enter same password";
// return false;
// }
// if(isNaN(phone.value)||phone.value.indexOf(' ')>=0){
//     msg.innerHTML="please enter correct phone number";
// return false;
// }
// alert(myform.values);
// return true;
// }

const btn = document.querySelector('#submit');
const form = document.querySelector('#myform');


btn.addEventListener('click', (e) => {
    // prevent the form from submitting
    e.preventDefault();

    // show the form values
    const formData = new FormData(form);
    const values = [...formData.entries()];
    console.log(values);
});