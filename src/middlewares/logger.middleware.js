const fs= require ("fs")
module.exports =(req,res, next)=>{

    
     fs.appendFileSync("logs.txt",log)
     next();


};