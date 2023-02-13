let que = "";
let ans = 0;

let inp = document.getElementById("inp");

let btnValue = (val) => {
  inp.value += val;
  console.log(inp.value);
};



let calculate = () => {
  inp.value = eval(inp.value);
};

let ears = () => {
  inp.value = "";
};

//end calculator




//BMIcalculator

let calculateBmi = () => {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let result = document.getElementById("result");
  console.log(height);
  let bgm = weight / (height ^ 2);
  result.value = bgm;
};

let clearBMI = () => {
  document.getElementById("height").value = '';
  document.getElementById("weight").value = '';

}


//case three

let strToCharArr = (str) => {
  return str.split('');
}
let str = "tejas";
let arr = strToCharArr(str)
document.getElementById('three').innerHTML = `string : ${str}<br> array = ${arr}`

//case 4

function fnCalculateAge() {

  var userDateinput = document.getElementById("txtDOB").value;
  console.log(userDateinput);

  // convert user input value into date object
  var birthDate = new Date(userDateinput);
  console.log(" birthDate" + birthDate);

  // get difference from current date;
  var difference = Date.now() - birthDate.getTime();
  console.log(Date.now(), birthDate.getTime(), difference)
  var ageDate = new Date(difference);
  console.log(ageDate);
  var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  console.log(ageDate.getUTCFullYear());

  alert(calculatedAge);
}