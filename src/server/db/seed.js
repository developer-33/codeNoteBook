const db = require("./client");
const { createUser } = require("./users");
const { createNotebook, createSnippet } = require("./notebooksAndSnippets");

// Sample Users
const seedUsers = [
  {
    isAdmin:false,
    username: "CyberWarrior",
    email: "cyber@example.com",
    avatar_url: "https://example.com/avatar.png",
    bio: "Full-stack developer & gamer",
    theme: "cyberpunk",
    created_at: "2025-02-15T12:00:00Z",
    custom_settings: JSON.stringify({
      color: "#00ffcc",
      font: "Roboto",
      layout: "grid",
    }),
  },
];

// Sample Notebooks
const seedNotebooks = [
  { name: "First Notebook", created_at: "2025-02-14T12:00:00.000Z" },
  { name: "Second Notebook", created_at: "2025-02-14T12:00:00.000Z" },
];

// Sample Snippets
const seedSnippets = [
  {
    notebook_id: 1,
    code: "console.log('Hello World');",
    tags: ["JavaScript", "logging"],
    language: "JavaScript",
    created_at: "2025-02-14T12:00:00.000Z",
  },
];

// Create Tables
const createTables = async () => {
  try {
    console.log("Creating tables...");
    await db.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        avatar_url TEXT DEFAULT NULL,
        bio TEXT DEFAULT NULL,
        theme VARCHAR(20) DEFAULT 'default',
        custom_settings JSONB DEFAULT '{}'::jsonb,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        isAdmin BOOLEAN DEFAULT false
      );

      CREATE TABLE notebooks (
        id SERIAL PRIMARY KEY,
        name TEXT UNIQUE NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE snippets (
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
const insertUsers = async () => {
  try {
    console.log("Inserting users...");
    for (const user of seedUsers) {
      await createUser(user);
    }
    console.log("Users inserted successfully.");
  } catch (error) {
    console.error("Error inserting users:", error);
  }
};

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

// Insert Snippets
const insertSnippets = async () => {
  try {
    console.log("Inserting snippets...");
    for (const snippet of seedSnippets) {
      await createSnippet(snippet);
    }
    console.log("Snippets inserted successfully.");
  } catch (error) {
    console.error("Error inserting snippets:", error);
  }
};

// Seed Database
const seedDatabase = async () => {
  try {
    await db.connect();
    await createTables();
    await insertUsers();
    await insertNotebooks();
    await insertSnippets();
    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    db.end();
  }
};

seedDatabase();
