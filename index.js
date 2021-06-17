import express from 'express'
import userRoutes from "./router/user.js" //to use router we imported here 
import bodyParser from 'body-parser' //if we want response then need to use this



function myFunc(request, response){
    console.log("____________________myFunc function get called_____")
    console.log(request)
    response.send("Hello Purva Routing js")
}
var server=express()
//we can put url inside get fun onwhich url we want userROutes
server.get("/user",userRoutes) //localhost:8080/user url is asssigned to specififc fun ie iserRoutes here
server.use(bodyParser.json())
server.get("/",myFunc)
server.listen(8080)

