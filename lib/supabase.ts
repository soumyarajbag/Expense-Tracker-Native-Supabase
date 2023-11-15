import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://yhlfrsxmrtmylckzvnle.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobGZyc3htcnRteWxja3p2bmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNTQ2ODIsImV4cCI6MjAxNTYzMDY4Mn0.fL4365rpESXqS6U-pC5xYyZ5sOkvJBnwG2Zg-MO0gAo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})