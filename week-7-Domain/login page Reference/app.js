const express = require('express');
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser'); 
const nocache = require('nocache');  
const middleware = require ('./node')
// app.use(express.static('public')) 



app.use(nocache());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
      secret: "key123",
      saveUninitialized: true,
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 24 * 10,  
      },
    })
  );


app.set('view engine',"ejs"); 
app.set('views','./views')  

const userRoute = require("./Routes/userRoute");
app.use("/", userRoute);

function middle(){
  app.use(middleware.midd)
}

app.listen('3000',() => {
    console.log("server connected");
})