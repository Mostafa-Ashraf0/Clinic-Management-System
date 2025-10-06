import  supabase  from "../../utils/supabase"

async function signInWithEmail(email,pass) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: pass,
  })
  if(error) throw error;
  return data.user;
}

export default signInWithEmail;