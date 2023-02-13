
let case1 = () => {
    return new Promise((resolve, rej) => {
      setTimeout(() => {
        console.log("first resolve 5 sec");
        resolve()
      }, 5000);
    });
  };

  let second = () => {
    return new Promise((resolve, rej) => {
        setTimeout(() => {
          console.log("second resolve 10 sec");
          resolve()
        }, 10000);
      });
  }


  let go = async() =>{
    await case1();
    await second();
    let third = new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log("third  resolve 15 sec");
            resolve();
            
          }, 15000);
    });
  }
//   go();




  //second
  let case2 = async (cb) => {
    await new Promise ((res,rej) => {
        setTimeout(() => {
            console.log("first callback function 10 sec");
            res();
        }, 10000);
    });
    await cb();
    setTimeout(() => {
        console.log("third callback function 8 sec")
    }, 8000);


  }
   
    




let callBack2 = () => {
    setTimeout(() => {
        console.log("second function 10 sec");
    }, 10000);
}




case2(callBack2);