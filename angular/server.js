var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define end-points in the following way
// '/' is the root route
app.all('*',function(req,res,next)
{
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    next();
});
app.post('/login-response', function (request, response) {
    //Read a file from the file system and send it back to the response
   console.log(request.body);
   response.send(request.body);
});

app.get('/check', function (request, response) {
    //Read a file from the file system and send it back to the response
   console.log("Ok");
});

app.listen(3000, function () {
    console.log("Run")
})