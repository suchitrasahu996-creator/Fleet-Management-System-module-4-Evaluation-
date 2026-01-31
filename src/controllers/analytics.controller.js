const supabase = require ("../config/supabase.config");
 exports.getAnalytics = async (req,res )=>{
    const customers = await supabase.from("users").select().eq("role","customer");
    const  owners =await supabase.from("users").select().eq("role","owner");
    const drivers =await supabase.from ("users").select().eq("role","driver");
    const vehicles =await supabase.from ("users").select ();
    const
 }