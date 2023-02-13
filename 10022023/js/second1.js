//first 
let palidrome = (str) =>{
let len = str.length;

let revstr = str.reverse();
console.log(revstr);
let i = 0;
ans = ""
while(i<len){

    if(str[i]!=str[len-1]){
        ans = "not";
        break;
    }
    ans = "palidrome";
    i++;
    len--;
}
console.log(ans);
return ans;
};

palidrome("dgt")


//second

let findLarger = (arr, ele) =>{

let ans =   arr.filter(item => item > ele )


return ans;
};



//third

let countAge = (arr,ele) =>{
    let ans  = arr.reduce((count,item) =>{
        if(item.age>ele){
            count++;
        }
        return count;
    },0);
   return ans;
};

let objArr= [
    {
        id:1,
        name: 'John',
        age:10
    },
    {
        id:1,
        name: 'John',
        age:40
    },
    {
        id:1,
        name: 'John',
        age:29
    }
]
console.log(countAge(objArr,10));