let sidebar  = document.getElementsByClassName('sidebar')[0];

let currentUser = JSON.parse(sessionStorage.getItem('user'));

if(currentUser.role){
    sidebar.innerHTML += `   <div class="item"><a href="dashboard.html" >Dashboard</a></div>
<div class="item"><a href="users.html">Users</a></div>
<div class="item"><a href="userSession.html">Login Session</a></div>
<div class="item"><a href="login.html" onclick="return logOut()">Logout</a></div>`;

}else{
    sidebar.innerHTML += `   <div class="item"><a href="dashboard.html" >Dashboard</a>
    <div class="item"><a href="login.html" onclick="return logOut()">Logout</a></div>`;

}



