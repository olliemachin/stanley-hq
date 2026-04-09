import { createSupabaseServerClient } from './supabase'

export async function signInWithEmailAndPassword(email: string, password: string) {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export async function signUpWithEmailAndPassword(email: string, password: string) {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) throw error
  return data
}

export async function signOut() {
  const supabase = createSupabaseServerClient()
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
