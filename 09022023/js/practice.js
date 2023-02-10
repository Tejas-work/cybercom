let one = 1;
const constatnt  = "TEJAS";

var variable = "var";


function use () {

    var variable = "change";

    let one = 2;
    let letTwo = 4;
    console.log(one,variable);
}


function maybe (){
    console.log("maybr"+one);
}

var variable = "change";
//  let one = 2;
let letTwo =4;

use();
maybe()


let arr = ['1','2','3','4',6,7,3,6,8,9,7];



arr.forEach(x => console.log(x));

for (const i of arr) {
    console.log("of"+i);
}
