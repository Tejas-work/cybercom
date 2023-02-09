let oneId = document.getElementById('one');
let oneClass = document.getElementsByClassName('one');
let oneTags =document.getElementsByTagName('p');
let oneQuery = document.querySelector('#one');
let oneQueryAll = document.querySelectorAll('p');

let h4one = document.getElementById('prac1');
let h4two = document.getElementById('prac2');
let h4three = document.getElementById('prac3');
let h4four = document.getElementById('prac4');

let pracClass = document.getElementsByClassName('pracClass');

oneId.innerHTML="modify";
oneQuery.textContent="innnerText modify";


let html = "<h1>insertAdjacentHTML"
oneId.insertAdjacentHTML("afterend", html);


console.log(h4one.getAttribute('id'));

h4three.setAttribute('name','setAttribute');
h4two.style.color='blue'
console.log(h4two.classList);
console.log(h4two.className);


const para = document.createElement("h1");
para.innerText = "This is a paragraph.";
document.body.appendChild(para);



let practice = document.getElementById('try');
const newNode = document.createTextNode("changes");
practice.removeChild(practice.firstElementChild);
practice.replaceChild(newNode,practice.lastChild);

oneId.remove()
