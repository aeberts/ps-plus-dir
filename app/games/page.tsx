import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const supabase = await createClient()

  // Log the Supabase client to ensure it's initialized correctly
  console.log("Supabase client initialized:", supabase);

  const { data: games, error } = await supabase.from("games").select();

  if (error) {
   console.error("Error fetching games:", error);
  }
  
  console.log("Fetched games:", games);
  
  return (
    <div>
      <h1> Games </h1>
      <ul>
        {games?.map((game) => (
          <li key={game.id}>
            {game.title} - {game.metacritic_rating} - {game.store_link}
          </li>
        ))}
      </ul>
    </div>
  )
}
