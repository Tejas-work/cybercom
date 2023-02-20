let registerForm = document.registerForm;

if(localStorage.getItem('admin') && localStorage.getItem('admin').length >0){
    document.getElementById('submit').style.display = 'none';

    msg.innerHTML = "Admin already registered"
}


let validation = () => {
    let name = registerForm.name.value;
    let email = registerForm.email.value;
    let password = registerForm.password.value;
    let reEnterPassword = registerForm.reEnterPassword.value;
    let city = registerForm.city.value;
    let state = registerForm.state.value;
    let condition = registerForm.condition;
    let msg = document.getElementById('msg'); 

    if (!name) {
     msg.innerHTML = "please enter name";
     return false;
    }
    if(!email){
        msg.innerHTML = "please enter email";
        return false;
    }
    if(!password){
        msg.innerHTML = "please enter password";
        return false;
    }else if(password.length < 8){
        msg.innerHTML = "please enter 8 character password";
        return false;
    }

    if(!reEnterPassword){
        msg.innerHTML = "please enter Re-Enter Password";
        return false;
    }
    if(password!=reEnterPassword){
        console.log(password);
        console.log(reEnterPassword);
        msg.innerHTML = "please enter Re-Enter Password same as password";
        return false;
    }
   if(!condition.checked){
    msg.innerHTML = "please check the condition";
        return false;
   }
    dataStore(name,email,password,city,state);
    msg.innerHTML = "";
    document.getElementById('submit').style.display = 'none';
    return true;
}

let dataStore = (name,email,password,city,state) => {

    // let dataArray = [];
    let dataObj = {
        name:name,
        email : email,
        password : password,
        state : state,
        city : city,
        role:"admin"
    }
    // dataArray.push(dataObj);
    localStorage.setItem('admin',JSON.stringify(dataObj));
   
    

    // if(localStorage.getItem('admin') && localStorage.getItem('admin').length >0){
    //     let oldData = JSON.parse(localStorage.getItem('admin'));
    //     oldData.push(dataObj);
    //     localStorage.setItem('admin',JSON.stringify(oldData));
    // }else{
        

    // }

}

console.log(JSON.parse(localStorage.getItem('admin')));