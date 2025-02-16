require('dotenv').config(); // Load environment variables
const db = require("./client");
const { insertUsers} = require('./users')
  const  {insertNotebooks, insertSnippets } = require('./notebooksAndSnippets');

const seedDatabase = async () => {
  try {
    if (process.env.SEED_USERS === "true") {
      console.log("Seeding users...");
      await insertUsers();
    }

    if (process.env.SEED_NOTEBOOKS === "true") {
      console.log("Seeding notebooks...");
      await insertNotebooks();
    }

    if (process.env.SEED_SNIPPETS === "true") {
      console.log("Seeding snippets...");
      await insertSnippets();
    }

    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();