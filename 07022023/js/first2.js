let showData = document.getElementById("show");

let first = {
  name: "tejas",
  age: 21,
  address: "surat",
};

showData.innerHTML = "1." + JSON.stringify(first);

first.name = "utsav";

showData.innerHTML += "   change name" + JSON.stringify(first);

//second
let showData2 = document.getElementById("show2");
let product = {
  name: "pen",
  price: 10,
  quantity: 30,
};

let totalPrice = product.price * product.quantity;

showData2.innerHTML += `<h4>{JSON.stringify(first)}Total Price : ${totalPrice}</h4>`;

//third
let showData3 = document.getElementById("show3");
let combian = [
  {
    name: "tejas",
    age: 21,
    address: "surat",
  },
  {
    name: "pen",
    price: 10,
    quantity: 30,
  },
  {
    name: "mayur",
    age: 21,
    address: "rajkot",
  },
  {
    name: "file",
    price: 10,
    quantity: 20,
  },
  {
    name: "chirag",
    age: 21,
    address: "baroda",
  },
  {
    name: "color",
    price: 30,
    quantity: 30,
  },
];

combian.forEach((element) => {
  for (const key in element) {
    if (Object.hasOwnProperty.call(element, key)) {
      const data = element[key];

      showData3.innerHTML += data + "<br>";
    }
  }
  showData3.innerHTML += "<br>";
});

//fourth

let showData4 = document.getElementById("show4");


let example = {
  name: "color",
  price: 30,
  quantity: 30,
  age: 21,
  address: "baroda",
};



let allow = ['name','age','address'];

let filterObject = (argObj) =>{
  let obj = {};

  allow.map((key) =>{
    obj[key] = argObj[key];
  })
  return obj;
}

let obj4 = filterObject(example);


showData4.innerHTML+=JSON.stringify(example)+"<br>";
showData4.innerHTML+=JSON.stringify(obj4)+"<br>";



//fifth

let showData5 = document.getElementById("show5");

let half = {
    name: "color",
    price: 30,
  };

  let halfTwo={
    quantity: 30,
    age: 21,
    address: "baroda"
  }

  function full(obj1,obj2){
    let fullObj = {...obj1,...obj2};
    return JSON.stringify(fullObj);
  }

  showData5.innerHTML+=JSON.stringify(half)+"<br>";
  showData5.innerHTML+=JSON.stringify(halfTwo)+"<br>";
  showData5.innerHTML+=full(half,halfTwo);