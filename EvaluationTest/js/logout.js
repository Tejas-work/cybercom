//session data
let user = JSON.parse(sessionStorage.getItem("session"));

//local storage data
let localSession = JSON.parse(localStorage.getItem("session"));


//time date
let dateObj = new Date();

let time = dateObj.toLocaleTimeString();
let date = dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
});

//create obj of user session

let logOut = () => {


    let dataObj = {
        name: user.name,
        time: user.time,
        date: user.date,
        timeLogout: time,
        dateLogout: date,
    };


console.log(localSession);
    if (localSession) {
        //check user already exist
        let index = localSession.findIndex((x) => x.name === user.name);
        console.log(index)
        if (index != -1) {
            localSession[index].name = user.name;
            localSession[index].time = user.time;
            localSession[index].date = user.date;
            localSession[index].timeLogout = time;
            localSession[index].dateLogout = date;
            localStorage.setItem("session", JSON.stringify(localSession));
        } else {
            localSession.push(dataObj);
            localStorage.setItem("session", JSON.stringify(localSession));
        }
    } else {
        let arr = [];
        arr.push(dataObj);
        localStorage.setItem("session", JSON.stringify(arr));
    }

    sessionStorage.removeItem('user');
    sessionStorage.removeItem('session');
    return true;
};

// let dataObj = {
//     name: user.name,
//     time: time,
//     date: date,
//     timeLogout: time,
//     dateLogout: date
// }
// let oldData = JSON.parse(localStorage.getItem('session'));
// oldData.push(dataObj);
// localStorage.setItem('session', JSON.stringify(oldData));

