let num = [-1, 2, 1, -4],
  target = 1;

let find = (arr, target) => {
  let checkArr = [];
  let sum = [];
  for (let i = 0; i < arr.length - 2; i++) {
    // console.log(arr[i]);
    for (let j = i+1; j < arr.length - 1; j++) {
      // console.log(arr[j]);

      for (let k = j+1; k < arr.length; k++) {
        // console.log(arr[i] + arr[j] + arr[k],arr[i] , arr[j] , arr[k]);
        let ans = target - (arr[i] + arr[j] + arr[k]);

            sum.push(arr[i] + arr[j] + arr[k]);
          checkArr.push(Math.abs(ans));
      
      }
    }
  }

  let index = checkArr.indexOf(Math.min(...checkArr));

  return sum[index];
};
console.log(find(num, target));
