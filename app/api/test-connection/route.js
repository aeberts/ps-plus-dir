import { supabase } from '../../../lib/supabaseClient';

// GET route to test the connection
export async function GET() {
  // Example: Querying a table
  const { data, error } = await supabase.from('games').select('*');

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
