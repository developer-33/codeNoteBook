const db = require("./client");
const { createUser } = require("./users");


// Sample Users
const seedUsers = [
  {
    isAdmin: false,
    username: "CyberWarrior",
    email: "cyber@example.com",
    password: "SecurePassword123",  // 🔥 Added password
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
  {
    isAdmin: false,
    username: "CyberWarrior2",
    email: "cyber@example2.com",
    password: "AnotherStrongPass!",  // 🔥 Added password
    avatar_url: "https://example.com/avatar.png",
    bio: "Full-stack developer & gamer",
    theme: "cyberpunk",
    created_at: "2025-02-15T12:00:00Z",
    custom_settings: JSON.stringify({
      color: "#00ffcc",
      font: "Roboto",
      layout: "grid",
    }),
  }
];



// Sample Notebooks

// Create Tables
const createTables = async () => {
  try {
    console.log("Creating tables...");
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
       id SERIAL PRIMARY KEY,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password TEXT NOT NULL,  -- 🔥 Added password field
  avatar_url TEXT,
  bio TEXT,
  theme VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  custom_settings JSONB NOT NULL DEFAULT '{}'::JSONB
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
      console.log("Attempting to insert user:", user);
      await createUser(user);
      console.log("User inserted:", user.username);
    }
    console.log("Users inserted successfully.");
  } catch (error) {
    console.error("Error inserting users:", error);
  }
};



// Seed Database
const seedDatabase = async () => {
  try {
    await db.connect();
    await createTables();
    await insertUsers();

    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    db.end();
  }
};

seedDatabase();
