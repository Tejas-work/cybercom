
let height = [1,8,6,2,5,4,8,3,7];


let findArea = (h) => {
    
     let area = 0, i= 0 , j = h.length-1;

     while(i<j){
        
        area = Math.max(area,Math.min(h[i],h[j])*(j-i));

        h[i] <= h[j] ? i++ : j--;
     }
     return area;
};

// console.log(findArea(height));


//second

let inputString = "<html><head></head><p><img /></p><body></body></html>";
let strLength = inputString.length;
firstIndex = 0;
lastIndex = 0;
var arrOfTagText = [];

while (strLength!=0) {
    strLength = inputString.length;
    // console.log(inputString,strLength);
  var firstIndex = inputString.indexOf("<");
  var lastIndex = inputString.indexOf(">");
  let tagText = inputString.substring(firstIndex + 1, lastIndex);


  if(tagText[tagText.length-1]=='/'){
    //execption
  }else{
    if(tagText[0]=='/'){
        subStringOfTag = tagText.slice(1);
        if(arrOfTagText.find(e => e===subStringOfTag)){
            // console.log(subStringOfTag);
        arrOfTagText.pop();
        }else{
            arrOfTagText.push(tagText);
        }
    
        
      }
      else{
          arrOfTagText.push(tagText);
          
          console.log(arrOfTagText);
    
      }
  }
  inputString = inputString.slice(lastIndex + 1);
  console.log(inputString);


};
arrOfTagText.length==1 ? console.log("valid") : console.log("invalid");






