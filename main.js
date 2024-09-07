// const http = require('http');
// const fs=require('fs');
// const server=http.createServer((req,res)=>{
// if(fs.existsSync("./output.txt")){
// fs.readFile('./output.txt','utf8',(err,data)=>{
//     if(err){
//         console.error('Error in reading file',err);
//         res.end();
//         return;
//     }
//     console.log(data);
//     res.write('Hello, World!');
//     res.end();
// })
// }else{
//     console.log('File cannot be read!');
// }
// });
// server.listen(3000,'localhost',()=>{
//     console.log('Listenig to port 3000');
// });


const http = require('http');
const fs = require('fs');
const path = require('path');

// Get the file path from the command-line argument
const filePath = process.argv[2];

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Read the file contents
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Handle error (file not found or other issues)
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`Error: Could not read file. ${err.message}`);
      return;
    }
    // Serve the file contents
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Serving file: ${path.resolve(filePath)}`);
});

// TODO: Create an HTTP server

// TODO: Listen on port 3000

// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)

