const  supabase =require('../config/supabase.config')
async function checkDatabaseConnection (){
    try{
        const{error}=await
        supabase.from("users").select().limit(1);
        if(error){
            throw error;
        }
        console.log("Database connected sucessfully");
        return true;

    }catch (error){
        console.log("Database Connection failed",error.message);
        return false
    }
}
module.exports= checkDatabaseConnection