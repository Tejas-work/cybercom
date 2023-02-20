let getUser = JSON.parse(sessionStorage.getItem('user'));
console.log(getUser.op);
// if(!getUser?.role){
//   window.location = "login.html";
// }

let dataTable = document.getElementById("data");
let data = JSON.parse(localStorage.getItem("session"));
dataTable.innerHTML += data.map(user => {
  // console.log(user);
  return `<tr>
    <td>${user.name}</td>
    <td>${user.date} ${user.time}</td>
    <td>${user.dateLogout} ${user.timeLogout}</td>    
</tr>`;
});


