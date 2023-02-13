let boilWater = (boilTeaLeaves, addMilk) => {
    setTimeout(() => {
        console.log("Boil Water");
        boilTeaLeaves(addMilk);
    }, 5000);
};


let boilTeaLeaves = (addMilk) => {
    setTimeout(() => {
        console.log("Boil tea leaves");
        addMilk();

    }, 2000)
}

let addMilk = () => {
    console.log("Add milk");
}



// boilWater(boilTeaLeaves,addMilk);




// case 1 

let case1 = (cb1, cb2, cb3) => {
    cb1(cb2, cb3);
}

let callback1 = (cb1, cb2) => {
    setTimeout(() => {
        console.log("first callback function 10 sec");
        cb1(cb2);
    }, 10000);

}

let callBack2 = (cb) => {
    setTimeout(() => {
        console.log("second function 10 sec");
        cb();
    }, 10000);
}


let callBack3 = () => {
    setTimeout(() => {
        console.log("third callback function 8 sec")
    }, 8000);
}

case1(callback1, callBack2, callBack3);



//case 3

let patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let msg = document.getElementById('msg');
let validation = () => {

    let myForm = document.myForm;
    let fs = myForm.fn.value;
    let ls = myForm.ls.value;
    let email = myForm.email.value;
    let phone = myForm.phone.value;

    if(fs==""){
        msg.innerHTML = "please enter first name";
        return false;
    }if(ls==""){
        msg.innerHTML = "please enter last name";
        return false;
    }if(email==""){
        msg.innerHTML = "please enter email";
        return false;
    } 
    if(phone==""){
        msg.innerHTML = "please enter phone name";
        return false;
    }
    
     if(phone.length!=10){
        msg.innerHTML = "please enter valid phone";
        return false;
    }
}


let display  = (vali) =>{
if(vali()){
    msg.innerHTML= "okkk";
    return false;
}else{
    return false;
}

}