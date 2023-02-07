let first = document.getElementsByClassName("first");
let firstyes = document.getElementById("firstyes");
let firstno = document.getElementById('firstno');

let second = document.getElementsByClassName("second");
let secondYes = document.getElementById("secondYes");
let secondNo = document.getElementById('secondNo');



let dataTable = document.getElementById("dataTable");

function firstRemove(){
    for (let i = 0; i < first.length; i++) {
        first[i].style.display="none";
        
    }
}

function firstShow(){
    if(firstyes.checked){
       console.log(document.getElementsByName("option").values);
    }
    for (let i = 0; i < first.length; i++) {
        first[i].style.display="block";
        
    }  
}


function secondRemove(){
    for (let i = 0; i < second.length; i++) {
        second[i].style.display="none";
        
    }
}

function secondShow(){
    if(secondYes.checked){
       console.log(document.getElementsByName("option").values);
    }
    for (let i = 0; i < second.length; i++) {
        second[i].style.display="block";
        
    }  
}



let addRow = () => {
    dataTable.innerHTML += ' <tr><td><input type="text" name="" id=""></td><td><input type="date"></td><td><input type="text" name="" id=""></td><td><input type="number" name="" id=""></td></tr>';
}