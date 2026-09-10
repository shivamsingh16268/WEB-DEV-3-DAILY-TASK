// console.log("hello,World"); 
// console.log("hello,World"); 

// const fs = require('fs');
// const data = fs.readFileSync('notes.txt', 'utf-8')
// console.log(data)
// fs.writeFileSync('notes.txt','My name is mukul');

// const path = require('path');
// const filepath = path.join(__dirname, 'test','hello.txt');
// console.log(filepath) 

// const os= require('os');
// const user = os.userInfo();

// console.log(user)

// const des = require('./module/des');
// console.log(des); 

// const packages = require('./module/packages');
// console.log(packages);   


// const process = require('process');
// console.log(process.argv[3])  
// console.log(process.env.PORT)   




// const students = [
//     { id: 1, name: 'Gyan', age: 23 },
//     { id: 2, name: 'Gyan', age: 23 },
//     { id: 2, name: 'Gyan', age: 23 },
//     { id: 2, name: 'Gyan', age: 23 }
// ];
// const http = require('http');
// require("dotenv").config();
// const process = require('process');
// const port = process.env.PORT || 3000;
// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/api/students') {

//         res.writeHead(200, { 'Content-Type': 'text/html' });

//         res.end(
//             JSON.stringify({count: students.length, students
//             })
//         );
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<h1>Hello World</h1>');
//         res.write('<p>This is my first server</p>');
//         res.write('<p>My name is Gyan</p>');
//         res.end();
//     }
// });
// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



const students = [
    { id: 1, name: 'Gyan', age: 23 },
    { id: 2, name: 'Gyan', age: 23 },
    { id: 2, name: 'Gyan', age: 23 },
    { id: 2, name: 'Gyan', age: 23 }
];
const http = require('http');
require("dotenv").config();
const process = require('process');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
     if (req.method === 'GET' && req.url === '/api/students') {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(
            JSON.stringify({count: students.length, students})
        ); 
    } 
    else if(req.method === 'GET' && req.url === '/api/students/count'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({count: students.length}));
   }
   else{
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({count: students.length}));
   }

});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});  
      

    
    
    
    













