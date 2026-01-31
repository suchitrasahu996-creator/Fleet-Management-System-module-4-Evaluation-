require ('dotenv').config()
const { createclient } = require ("@supabase/supabase-js");
 
const supabase =createclient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
);
module.exports =supabase;