const db = require("./client");








const seedSnippets = [
    {
      notebook_id: 1,
      code: "console.log('Hello World');",
      tags: JSON.stringify(["javascript", "backend"]), // JSON array format
      language: "JavaScript",
      created_at: "2025-02-14T12:00:00.000Z",
    },
  ];
  // Create Tables
  const createTables = async () => {
    try {
      console.log("Creating tables...");
      await db.query(`
        
  
        
  
        CREATE TABLE IF NOT EXISTS snippets (
          id SERIAL PRIMARY KEY,
          notebook_id INT REFERENCES notebooks(id) ON DELETE CASCADE,
          code TEXT NOT NULL,
          tags TEXT[],
          language TEXT NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );
      `);
      console.log("Tables created successfully.");
    } catch (err) {
      console.error("Error creating tables:", err);
      throw err;
    }
  };
  
  // Insert Users

  

  
  // Insert Snippets
  const insertSnippets = async (client, snippet) => {
    const formattedTags = `{${snippet.tags.join(',')}}`; // Convert array to PostgreSQL format
    await client.query(
      `INSERT INTO snippets (notebook_id, code, tags, language, created_at)
       VALUES ($1, $2, $3::text[], $4, $5)`,
      [snippet.notebook_id, snippet.code, formattedTags, snippet.language, snippet.created_at]
    );
  };
  
  // Seed Database
  const seedDatabase = async () => {
    try {
      await db.connect();
      await createTables();

      await insertSnippets();
      console.log("Database seeded successfully!");
    } catch (err) {
      console.error("Error seeding database:", err);
    } finally {
      db.end();
    }
  };
  
  seedDatabase();
  