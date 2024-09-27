// src/supabaseClient.js
// Data base password: 123!@#zbasi
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wjcoqiwttyjffzbhxzit.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqY29xaXd0dHlqZmZ6Ymh4eml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NzAyNzMsImV4cCI6MjA0MzA0NjI3M30.w_HMhTQyTA2KCTtNkMaVFuMw0OJEUurGhzhcnlkfRVc';

export const supabase = createClient(supabaseUrl, supabaseKey);
