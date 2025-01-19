import { supabase } from "../lib/supabase"

export const getuserData = async (userid)=>{
    const { data, error } = await supabase
    .from('users')
    .select()
    .eq('id', userid)
    .single()
    if(error){
        console.log(error.messgae)
        return{status:false,error:error.message}
    }
    if(data){
        return{status:true,data}
    }
}