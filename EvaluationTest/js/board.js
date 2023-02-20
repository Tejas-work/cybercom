let userCurrent = JSON.parse(sessionStorage.getItem('user'));

if(!userCurrent.role){
    let currentDate =new Date();
    let birthday = new Date(userCurrent.birthDate);
    let main = document.getElementsByClassName('main')[0];
    main.innerHTML = `
    <h2>Welcom To Cybercom Creaton</h2>`;
    if(birthday.toLocaleDateString() === currentDate.toLocaleDateString()){
        main.innerHTML += `<p>Happy Birthday!</p>`
    }
    

}else{

    let eighteenBelow = document.getElementById('eighteenBelow');
let eighteenToFifty = document.getElementById('eighteenToFifty');
let fiftyAbove = document.getElementById('FiftyAbove');

let usersData = JSON.parse(localStorage.getItem('users'));
console.log(usersData);

let eighteenLt = usersData.map((item) => {
  
    let count = 0;
    if(item.age < 18){
        count++;
    }
    return count;
})
let fiftyTO = usersData.map((item) => {
  
    let count = 0;
    if(18 < item.age && item.age< 50){
        count++;
    }
    return count;
})
let fiftyGt = usersData.map((item) => {
  
    let count = 0;
    if(item.age > 50){
        count++;
    }
    return count;
})

// console.log(eighteenLt,fiftyGt,fiftyTO);

eighteenBelow.innerHTML = eighteenLt+" Users";
eighteenToFifty.innerHTML = fiftyTO+" Users";
fiftyAbove.innerHTML = fiftyGt+" Users";
}




