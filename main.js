const http = require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
if(fs.existsSync("./output.txt")){
fs.readFile('./output.txt','utf8',(err,data)=>{
    if(err){
        console.error('Error in reading file',err);
        res.end();
        return;
    }
    console.log(data);
    res.write('Hello, World!');
    res.end();
})
}else{
    console.log('File cannot be read!')
}
});
server.listen(3000,'localhost',()=>{
    console.log('Listenig to port 3000');
})
// TODO: Create an HTTP server

// TODO: Listen on port 3000

// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)

