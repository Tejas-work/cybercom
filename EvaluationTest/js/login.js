
let getUser = JSON.parse(sessionStorage.getItem('user'));

if(getUser){
    window.location = "dashboard.html";
}
let msg  = document.getElementById('msg')


let validation = (checkUser) =>{
    let loginForm = document.loginForm;
    let email = loginForm.email.value;
    let password = loginForm.password.value;
    if(!email){
        msg.innerHTML= 'please enter email';
        return false;
    }
    if(!password){
        msg.innerHTML= 'please enter password'
        return false;
    }
    msg.innerHTML = ""

    let user = checkUser(email,password);
    console.log(user);

    if(user){
        sessionStorage.setItem('user',JSON.stringify(user));
        storeSession(user);
        window.location.href = "dashboard.html";
        return true;
    }
   return false;
 
}

let checkUser = (email,password) =>{

    
//  console.log(email,password);



    if(JSON.parse(localStorage.getItem('admin')) || JSON.parse(localStorage.getItem('users'))){
        let admin = JSON.parse(localStorage.getItem('admin'));
        let data = JSON.parse(localStorage.getItem('users'));



        if(admin.email == email){
            if(password !=admin.password){
                msg.innerHTML = "enter correct password";
                return false;
            }else{
                console.log("right");
                return admin;
            }
        }

        if(!data.find(x => x.email == email)){
            msg.innerHTML = "please enter valid email";
            return false;
        }else if(!data.find(x => x.email == email && x.password==password)){
            msg.innerHTML = "please enter correct password";
            return false;
        }else{
            return data.find(x => x.email == email && x.password==password);
        };
    }
   
    
    
}


let storeSession = (user) => {
    let dateObj = new Date();
    //time date
    let time =dateObj.toLocaleTimeString();
    let date = dateObj.toLocaleDateString('en-GB', {  
        day:   'numeric',
        month: 'short',
        year:  'numeric',
    });

    let dataObj = {
        name:user.name,
        time : time,
        date : date
    }
    sessionStorage.setItem('session', JSON.stringify(dataObj));
    //store
}

if(localStorage.getItem('admin')){
    document.getElementById('register').style.display='none'
}