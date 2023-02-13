let nums = [0,1];


// let subSet = (arr) =>{
//     let output = [[]];
//     for (let i = 0; i < arr.length; i++) {
//         output.push([arr[i]]);
//         for
//     }
// }

let ans = [[]];
let part = [];
let n = 0;
while(n < nums.length){
    
    for (let i = 1; i <= nums.length; i++) {
        
        for (let j = n; j < i; j++) {
            
            if(j < nums.length){
                part.push(nums[j]);
            }

         
        }
        ans.push(part)
        part = [];
    }

    n++
};



const uniqueArrayOfArrays = [...new Set(ans.map(x => JSON.stringify(x)))].map(JSON.parse);



console.log(uniqueArrayOfArrays);