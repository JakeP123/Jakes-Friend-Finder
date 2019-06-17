var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

//----------
app.use(express.static('public'));

//Midleware
app.use(express.urlencoded({ extended: true })); //name = jacob
app.use(express.json()); 

//routes
require("./routing/apiRoutes.js")(app)
require("./routing/htmlRoutes.js")(app)


//Initializing our app
app.listen(PORT, function() {
    console.log("app is listening on port " + PORT);
})
