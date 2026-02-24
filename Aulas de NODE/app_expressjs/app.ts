import  express from "express";
//import clientsRouter from "./Router/clientsRouter"

const app = express() ;
//app.use(clientsRouter);
//app.set("view engine", "pug");
//app.set("view","./Views" );

app.listen(process.env.port , ()=>{
    console.log("Servidor criado...");

});
