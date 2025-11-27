import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const SUPABASE_URL = 'https://fgkaclbocufutkahnxpz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZna2FjbGJvY3VmdXRrYWhueHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNzI2MTcsImV4cCI6MjA3OTg0ODYxN30.FH9n_WDa7mgsgBMWatvOrGcYmK-zdd9686ixOrAnQGA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);