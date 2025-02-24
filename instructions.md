# **PlayStation Plus Database Web App – Instructions**
The playstation plus database web app is designed to track and rank the games that are currently availble on the PlayStation Plus Extra network in Canada. Users are able to view a table with all the games that are available on PS plus extra, the metacritic rating for the game, and a link to the game on the Sony PlayStation Store page. The application will scrape the data from the Sony PlayStation webpage and will store the information from the scrape in a database. The app will use Next.js 15.1.7 and Tailwind CSS.

## **Project Overview**
The app will:
- Scrape data from the **PlayStation Store** for **PS Plus Extra (Canada)**
- Store game details in a **database (Supabase or Firebase)**
- Display a **sortable and filterable table** with:
  - **Game title**
  - **Metacritic rating**
  - **Link to PlayStation Store page**
- Allow users to **rank and review games**
- Use **Next.js 15.1.7**, **Tailwind CSS**, and **web scraping** tools

---

## **Tech Stack**
- **Framework**: Next.js 15.1.7 (App Router)
- **UI Styling**: Tailwind CSS
- **Database**: Supabase
- **Scraping**: Playwright for web scraping
- **Hosting**: Vercel (for frontend), Supabase (for backend)
- **Authentication**: NextAuth.js (optional for user rankings)

---

## **Step-by-Step Instructions**

### **1: Set Up the Database (Supabase)**
**Goal**: Set up a database to store **game details, Metacritic scores, and store links for games on the PlayStation Plus Extra**.

**Tasks**:
1. Define a table/schema for **storing game information** including game id, game title, game description, Metacritic score, and PlayStation store link.
2. Provide detailed descriptions on how to configure the database tables on Supabase.
3. Connect to an existing Supabase project.
4. Connect Next.js to the database.

**Success Criteria**:
- Database is accessible via Next.js.
- A sample query can fetch data from the database.

---

### **2: Implement Web Scraping for PlayStation Store**
**Goal**: Scrape **PlayStation Plus Extra (Canada) games** and store them in the database.

**Tasks**:
1. Use **Playwright or Cheerio** to extract:
   - Game title
   - Metacritic rating (if available)
   - PlayStation Store link
2. Automate the scraping script.
3. Store results in the database.

**Success Criteria**:
- Successfully fetch game data from PlayStation Store.
- Store the data in the database.

---

### **3: Create API Routes for Fetching Game Data**
**Goal**: Build API endpoints to serve game data from the database.

**Tasks**:
1. Create a `/api/games` endpoint to **fetch all game entries**.
2. Implement a `/api/games/[id]` endpoint for **specific game details**.
3. Ensure API returns data in **JSON format**.

**Success Criteria**:
- API routes return correct game data.
- JSON responses match the database entries.

---

### **4: Create Game Table UI**
**Goal**: Display a **sortable and filterable table** of all available PS Plus Extra games.

**Tasks**:
1. Fetch data from the API.
2. Display game data in a **Tailwind-styled table**.
3. Add sorting and filtering options (e.g., **sort by rating, search by name**).

**Success Criteria**:
- Users can see all games in a table.
- Sorting and filtering work correctly.

---

### **5: Add Authentication (Optional)**
**Goal**: Allow users to **log in** to rank games.

**Tasks**:
1. Set up **NextAuth.js** for authentication.
2. Support **Google login**.
3. Restrict ranking to logged-in users.

**Success Criteria**:
- Users can log in and rank games.
- Guest users can still view the list.

---

### **6: Implement Game Ranking System**
**Goal**: Allow users to **rank and review** games.

**Tasks**:
1. Add a ranking system (e.g., **1-10 star ratings**).
2. Store user ratings in the database.
3. Calculate an **average score** based on user input.

**Success Criteria**:
- Users can rate games.
- Rankings update dynamically.

---

### **7: Deploy the App**
**Goal**: Deploy the app using **Vercel**.

**Tasks**:
1. Deploy Next.js frontend on **Vercel**.
2. Ensure API and database work in production.
3. Set up automatic **data updates** for game list.

**Success Criteria**:
- The live app works on **Vercel**.
- Users can browse, rank, and review games.

---

## **Docs & References**

### Next.js Documentation

- [Next.js Docs](https://nextjs.org/docs)

### Tailwind CSS Documentation

- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Supabase Documentation

How to connect to a Supabase database:

Create a .env.local file with the following information:

```javascript
NEXT_PUBLIC_SUPABASE_URL=<Database URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<Anonymous Key>
```

Create a page.tsx file with the following content:

```javascript
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  )
}
```

- [Supabase Docs](https://supabase.com/docs)


### Playwright Documentation

- [Playwright Docs](https://playwright.dev/docs/api/class-playwright)

### NextAuth.js Documentation

- [NextAuth.js Docs](https://next-auth.js.org/) 