let boilWater = (cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("output from one");
      resolve(cb);
    }, 5000);
  });
};

let boilTeaLeaves = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("output from second");
      resolve("output from third");
    }, 10000);
  });
};

boilWater(boilTeaLeaves)
  .then((cb) => {
    return cb();
  })
  .then((x) => {
    setTimeout(() => {
      console.log(x);
      
    }, 15000);
  });

//case 2

let case1 = () => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      console.log("first resolve 10 sec");
      resolve("second resolve 10 sec");
    }, 10000);
  });
};

case1()
  .then((x) => {
    return new Promise((resolve, rej) => {
      setTimeout(() => {
        console.log(x);
        resolve("third resolve 8 sec");
      }, 10000);
    });
  })
  .then((x) => {
    setTimeout(() => {
      console.log(x);
    }, 8000);
  });

//case 3

let patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let msg = document.getElementById("msg");

let validation = () => {
  let myForm = document.myForm;
  let fs = myForm.fn.value;
  let ls = myForm.ls.value;
  let email = myForm.email.value;
  let phone = myForm.phone.value;

  myPromise = new Promise((resolve, reject) => {
    if (fs == "") {
      reject("please enter first name");
    }
    if (ls == "") {
      reject("please enter last name");
    }
    if (email == "") {
      reject("please enter email");
    }
    if (phone == "") {
      reject("please enter phone name");
    }

    if (phone.length != 10) {
      reject("please enter valid phone");
    }

    resolve("Valid");
  });
  myPromise
    .then((x) => {
      msg.innerHTML = x;
    })
    .catch((error) => {
      msg.innerHTML = error;
    });
};
