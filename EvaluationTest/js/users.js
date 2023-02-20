let getUser = JSON.parse(sessionStorage.getItem('user'));

if(!getUser?.role){
    window.location = "login.html";
}

let btn = document.getElementById('btn');
let heading = document.getElementsByTagName('h2');
let validation = () => {
    let userForm = document.userForm;
    console.log(userForm);
    let name = userForm.name.value;
    let email = userForm.email.value;
    let password = userForm.password.value;
    let birthDate = userForm.birthday.value;
    let dateObj = new Date(birthDate).toJSON().slice(0, 10);
    // let date = dateObj.getDate();
    // let month = dateObj.getMonth() + 1;
    // let year = dateObj.getFullYear()



    if (!name) {
        msg.innerHTML = "please enter name";
        return false;

    }
    if (!email) {
        msg.innerHTML = "please enter email";
        return false;

    }
    if (!password) {
        msg.innerHTML = "please enter password";
        return false;
    }
    if (password.length < 8) {

        msg.innerHTML = "please enter 8 character password";
        return false;
    }
    if (!dateObj) {
        msg.innerHTML = "please select  date";
        return false;
    }
    // msg.innerHTML = "";
    let age = fnCalculateAge(birthDate);
    storeData(name, email, password, dateObj,  age);
    return true;
};




function fnCalculateAge(date) {

    // convert user input value into date object
    var birthDate = new Date(date);

    // get difference from current date;
    var difference = Date.now() - birthDate.getTime();
    console.log(Date.now(), birthDate.getTime(), difference)
    var ageDate = new Date(difference);
    var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    return calculatedAge;
}

let storeData = (name, email, password, date, age) => {
    // let birthDate = `${year}-${month}-${date}`;

    let dataArray = [];

    let id = Math.floor(Math.random() * 1000);
    if (localStorage.getItem('users') && localStorage.getItem('users').length > 0) {
        // let id = JSON.parse(localStorage.getItem('users')).length;
        let dataObj = {
            name: name,
            email: email,
            password: password,
            birthDate: date,
            age: age,
            id: id
        }
        let oldData = JSON.parse(localStorage.getItem('users'));
        oldData.push(dataObj);
        localStorage.setItem('users', JSON.stringify(oldData));
    } else {
        let dataObj = {
            name: name,
            email: email,
            password: password,
            birthDate: date,
            age: age,
            id: 0
        }
        dataArray.push(dataObj);
        localStorage.setItem('users', JSON.stringify(dataArray));
    }


}

let showData = () => {
    let data = JSON.parse(localStorage.getItem('users'));

    console.log(data.length);

    let display = document.getElementById('data');

    if (data) {
        display.innerHTML += data.map((user) => {
            return `<tr>
           <td>${user.name}</td>
           <td>${user.email}</td>
           <td>${user.password}</td>
           <td>${user.birthDate}</td>
           <td>${user.age}</td>
           <td>
           <button  onclick = "edit(${user.id})" >edit</button>
            <button onclick = "deleteUser(${user.id})">delete</button>
            </td>
       </tr>`

        });
    }
}
showData();

let edit = (id) => {

    console.log(id);
    
    heading[0].innerHTML = "Update User";
  
    btn.innerHTML = "update";

    let data = JSON.parse(localStorage.getItem('users'));
    let index = data.findIndex(x => x.id == id);
    
    console.log(index);
    let user = data[index];
   let date = user.birthDate;



    userForm.name.value = user.name;
    userForm.email.value = user.email
    userForm.password.value=user.password
    userForm.birthday.value=date;
    document.userForm.setAttribute('onsubmit',`return update(${index})`);
    console.log(user);
}


let update = (index) =>{
    let data = JSON.parse(localStorage.getItem('users'));


    let userForm = document.userForm;
    console.log(userForm);
    let name = userForm.name.value;
    let email = userForm.email.value;
    let password = userForm.password.value;
    let birthDate = userForm.birthday.value;
    let dateObj = new Date(birthDate).toJSON().slice(0, 10);

    if (!name) {
        msg.innerHTML = "please enter name";
        return false;

    }
    if (!email) {
        msg.innerHTML = "please enter email";
        return false;

    }
    if (!password) {
        msg.innerHTML = "please enter password";
        return false;
    }
    if (password.length < 8) {

        msg.innerHTML = "please enter 8 character password";
        return false;
    }
    if (!birthDate) {
        msg.innerHTML = "please select  date";
        return false;
    }

    let age = fnCalculateAge(birthDate);
   data[index].name =  userForm.name.value ;
     data[index].email = userForm.email.value;
    data[index].password = userForm.password.value;
    data[index].date =userForm.birthday.value;
    data[index].age = age;
    document.userForm.setAttribute('onclick',`validation()`);

    heading[0].innerHTML = "Add User";
    btn.innerHTML = "Add";
    localStorage.setItem('users', JSON.stringify(data));
    return true;

};


let deleteUser = (id) =>{
    let data = JSON.parse(localStorage.getItem('users'));
    let index = data.findIndex(x => x.id == id);

    

    data.splice(index,1);
    localStorage.setItem('users', JSON.stringify(data));
    location.reload();
}