import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://phhfqfzmfxykkoznccud.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoaGZxZnptZnh5a2tvem5jY3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2NzEwNTYsImV4cCI6MjA1NTI0NzA1Nn0.izhfxgrPOjVAlas6FOsMrxQDs8tUXsN6VqAuEWiMx90';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);