let one = document.getElementById('one');
let oneBtn = document.getElementById('oneBtn');

function changePara() {
    one.innerHTML = Date();
  }


  //practice1.1 - 2
let second = document.getElementById('second');
let addBtn = document.getElementById('add');
let removeBtn = document.getElementById('remove');


addBtn.addEventListener('click',() =>{
  let ele = document.createElement('li');
  ele.textContent='add';
  second.appendChild(ele);
});

removeBtn.addEventListener('click',() =>{
  second.removeChild(second.lastChild);
});



//practice1.1 - 3

let third = document.getElementsByClassName('third');

let changeThird = (para) =>{
  third[para-1].innerHTML="changed";
}

//practies1.1 - 4

let myForm = document.myForm;

let check = () =>{
  let msg = document.getElementById('msg');
  let email = myForm.email.value;
  let password = myForm.password.value;
  let patternPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  let patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(!patternEmail.test(email)){
    msg.innerHTML="please enter valid email";
    return false;
  }
  if(!patternPassword.test(password)){
    msg.innerHTML="please enter valid password";
    return false;
  }
  return true;
}

//fifth
let changeImg = (no) =>{
  let img = document.getElementsByTagName('img');
  console.log(img);

  img[no-1].setAttribute('src','../images/739892.jpg')
}
