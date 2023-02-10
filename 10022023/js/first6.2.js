// function decodeWays(s) {
//     if (s.length === 0 || s[0] === '0') return 0;
//     let first = 1;
//     let second = 1;
//     let curr = 0;
//     for (let i = 1; i < s.length; i++) {
//       if (s[i] === '0') {
//         if (s[i - 1] > '2') return 0;
//         curr = 0;
//       } 
//       else if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] <= '6')) {
//         curr = first + second;
//       } else {
//         curr = second;
//       }
//       first = second;
//       second = curr;
//     }
//     return curr;
//   }

// let str = "22612";
//   console.log(decodeWays(str));


function decodeAll(s) {
    if (s.length === 0) {
      return 0;
    }
  
    const arr = new Array(s.length + 1).fill(0);
    console.log(arr);
  
    arr[0] = 1;
    arr[1] = s[0] !== "0" ? 1 : 0;
  
    console.log("\nAfter arr intial: " + arr);
  
    for (let i = 2; i <= s.length; i++) {
      const first = parseInt(s.substring(i - 1, i));
      const second = parseInt(s.substring(i - 2, i));
  
      if (first >= 1 && first <= 9) {
        arr[i] += arr[i - 1];
        console.log("index first : " + arr[i] + " " + first);
        console.log(arr + "\n");
      }
      if (second >= 10 && second <= 26) {
        arr[i] += arr[i - 2];
        console.log("index second : " + arr[i] + " " + second);
        console.log(arr + "\n");
      }
    }
    console.log("final Arr :" + arr);
  
    return arr[s.length];
  }
  
  // start
  let input = "1234";
  
  let result = decodeAll(input);
  
  console.log("\nResult : " + result);