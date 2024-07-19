 const http = require('http');
 const fs = require('fs');
 const _ = require('lodash');

 const server = http.createServer((req, res) => { //Assign created server to a property for later use.
   //  console.log(req.url, req.method);
   //  console.log(res);

   // Send plain text back
   // res.setHeader('Content-Type','text/plain'); // Set content type of the header
   // res.write('Hello, ninjas'); // Write text
   // res.end(); // End response and send back to browser

   // Send html back
   // res.setHeader('Content-Type','text/html');
   // res.write('<head><link href="#"/></head>');
   // res.write('<p>Hello, ninjas.</p>');
   // res.write('<p>Hello again, ninjas.</p>');
   // res.end();

   // Lodash
   const num = _.random(0,20);
   console.log(num);

   const once = _.once(() => {
      console.log('hello');
   });

   once();
   once();
   once();

   // Send html file back
   res.setHeader('Conent-Type', 'text/html');
   var path = './views/';

   switch(req.url) {
      case '/':
         path += 'index.html';
         res.statusCode = 200;
         break;
      case '/about':
         path += 'about.html';
         res.statusCode = 200;
         break;
      case '/about-blah':
         res.statusCode = 301;
         res.setHeader('Location','/about');
         res.end();
         break;
      default:
         path += '404.html';
         res.statusCode = 404;
         break;
   }

   fs.readFile(path,(err, data) => {
      if(err){
         console.log(err);
         res.end();
      } else {
         //res.write(data);
         res.end(data);
      }
   })

});

 server.listen(3000, 'localhost', () => {
    console.log('Listening to requests on port 3000.');
 });