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

export const updateData = async (data)=>{
    const {phone} = data
    const { error } = await supabase
  .from('users')
  .update({ name: 'Australia',phone, })
  .eq('id', 1)

  if(!error){
    console.log("Updated")
    return {success:true}
  }else{
    console.log("Error : ",error.message)
    return {success:false}
  }

}