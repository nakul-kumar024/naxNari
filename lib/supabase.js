// lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://offfaqatnjizueptdyud.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZmZhcWF0bmppenVlcHRkeXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5Njg5ODMsImV4cCI6MjA5MDU0NDk4M30.WHXnsggW89JXtwfNNxmvD2Zr0UBWgGpmqoKBXyAWTnc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);