const db = require("./client");
const { createNotebook } = require("./notebooksAndSnippets");




const seedNotebooks = [
    { name: "First Notebook", created_at: "2025-02-14T12:00:00.000Z" },
    { name: "Second Notebook", created_at: "2025-02-14T12:00:00.000Z" },
  ];
  


  // Create Tables
  const createTables = async () => {
    try {
      console.log("Creating tables...");
      await db.query(`
      
  
        CREATE TABLE IF NOT EXISTS notebooks (
          id SERIAL PRIMARY KEY,
          name TEXT UNIQUE NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );
  
  
      console.log("Tables created successfully.");
    } catch (err) {
      console.error("Error creating tables:", err);
      throw err;
    }
  };
  
  // Insert Users

  // Insert Notebooks
  const insertNotebooks = async () => {
    try {
      console.log("Inserting notebooks...");
      for (const notebook of seedNotebooks) {
        await createNotebook(notebook);
      }
      console.log("Notebooks inserted successfully.");
    } catch (error) {
      console.error("Error inserting notebooks:", error);
    }
  };
  

  
  // Seed Database
  const seedDatabase = async () => {
    try {
      await db.connect();
      await createTables();

      await insertNotebooks();

      console.log("Database seeded successfully!");
    } catch (err) {
      console.error("Error seeding database:", err);
    } finally {
      db.end();
    }
  };
  
  seedDatabase();
  