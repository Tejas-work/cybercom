let firstShow = document.getElementById('first');


let arr = [1,2,3,4,5,66,7];


//first1.3 1
let sum = arr.reduce((sum,item)=>{
    sum += item;
    return sum;
})

let max =arr.reduce((max,item)=>{
    if(max<item){
        max=item;
    };
    return max;
})

let total = 0;
let avg = arr.reduce((avg,item)=>{
    total+=item;
    avg = total/arr.length;
    return avg;
})

firstShow.innerHTML+=`<ul>
<li>Sum : ${sum}</li>
<li>Average : ${avg}</li>
<li>Maximum : ${max}</li>
</ul>`


//second
let secondShow = document.getElementById('second');
let arr2 = ["what","which","how","why","when"];


let longestStr = arr2.reduce((str,item)=>{
    if(str.length<item.length){
        str = item;
    }
    return str;

});

secondShow.innerHTML+=`longest string : ${longestStr}`

//third 

let thirdShow = document.getElementById('third');

let arr3 = [
    {
        name:'first',
        age : 21
    },
    {
        name:'second',
        age : 24
    },
    {
        name:'third',
        age : 12
    },
    {
        name:'fourth',
        age : 27
    }
];
thirdShow.innerHTML+=`old : ${JSON.stringify(arr3)}<br><br>`;

// sort array 
arr3.sort((a, b) => a.age - b.age);

thirdShow.innerHTML+=`new : ${JSON.stringify(arr3)}`;


//fourth

let fourthShow = document.getElementById('fourth');

let arr4 = [1,2,3,1,4,5,3,5,6,7,8,8];

let removeDuplicate = (arrA) =>{
    arrA.filter((item, index) => arrA.indexOf(item) === index);
}

let newArr = removeDuplicate(arr4);

fourthShow.innerHTML+=`old: ${arr4}<br>
remove Duplicate : ${newArr}`;


//Fifth
let fifthShow = document.getElementById('fifth');

let arrChar =['t','y','g','t'];
let arrNum = [1,2,3,4,5,6];

let combines = (arr1,arr2) =>{
    let arr5 = [...arrChar,...arrNum];
    return arr5;
};

let arr5 = combines(arrChar,arrNum);

fifthShow.innerHTML+=`old: ${arrChar} And ${arrNum}<br>
combines array : ${arr5}`;


//sixth

let sixthShow = document.getElementById('sixth');

let arr6 = ["what","which","how","why","when"];

let sortArray = arr6.sort();

sixthShow.innerHTML+=`old: ${arr6}<br>
Sorted array : ${sortArray}`;



