const fs=require("fs");
//fs.writeFile("message.txt","hello from NodeJs!",(err) =>{
//if(err) throw err;
//console.log("the file has been saved...");
//});

fs.readFile(".\\..\\2.2+Native+Modules\\2.2 Native Modules\\message.txt","utf8",(err,data)=>{
if(err) throw err;
console.log (data);
});