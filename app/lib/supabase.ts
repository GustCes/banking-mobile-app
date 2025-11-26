import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://djswimuhivfqvlavligu.supabase.co/';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqc3dpbXVoaXZmcXZsYXZsaWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzg5ODAsImV4cCI6MjA3OTc1NDk4MH0.1LuLMopTzhpQdHThIEF56wQuEabJFaTvmKL_IiLnmCk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);