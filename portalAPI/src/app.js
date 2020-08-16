import Express from "express"
import Routes from "./routes"

export default class App{
    constructor(){
        this.server = new Express()   
        this.server.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        })
        this.routes = new Routes(this.server)    
        this.routes.init() 

        
    }
}