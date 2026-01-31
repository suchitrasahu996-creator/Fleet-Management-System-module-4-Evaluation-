const supabase =requiire ("../config/supabase");
const {uuid} =require ("uuid");

exports.signupUser = async (req,res )=>{
    try{
        const {name,email,password,role}= req.body;
        if (!["customer","owner","driver"].includes(roles)){
            return res.status(400).json({message:"Invalid role"});
        }
        const {error} =await supabase.from("users").insert({
            id: uuid(),
            name,
            email,
            password,
            role

        });

        if (error){
            return res.status(400).json({message:error.message})
        }
    }
}