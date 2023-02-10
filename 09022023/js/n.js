let userObj = [
    {
        user:{
            name:"djkfndj",
            age:0,
            edu: {
                deg:"sdjkf"
            }
        }
    }
]


userObj.map((x)=>{
    let name = x.user.edu.deg;
    console.log(name);
})


for (let i = 0; i < userObj.length; i++) {
    let name = userObj[i].user.name;
    
}