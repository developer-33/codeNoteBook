const db = require("./client"); // Assuming db is properly configured

// Sample notebook data with updated structure
let notebooks = [
  {
    notebookName: "First one",
    language: "react",
    notes: "empty",
    snippet: [
      { snippetName: "React one", code: "const hello" },
      { snippetName: "React two", code: "const hello2" },
      { snippetName: "React three", code: "const hello3" }
    ],
    createdAt: new Date(),
  },
  {
    notebookName: "Second one",
    language: "react",
    notes: "empty",
    createdAt: new Date(),
    snippet: [
      { snippetName: "React one", code: "const hello" }
    ],
  },
  {
    notebookName: "Third one",
    language: "react",
    notes: "empty",
    createdAt: new Date(),
    snippet: [
      { snippetName: "React one", code: "const hello" }
    ],
  }
];

const dropTables = async () => {
  await db.query(`
    DROP TABLE IF EXISTS snippets CASCADE;
    DROP TABLE IF EXISTS notebooks CASCADE;
  `);
};

const createTables = async () => {
  try {
    await db.query(`
      CREATE TABLE notebooks (
        notebookid SERIAL PRIMARY KEY,
        notebookname VARCHAR(100) NOT NULL,
        language VARCHAR(50),
        notes TEXT,
        createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.query(`
      CREATE TABLE snippets (
        snippetid SERIAL PRIMARY KEY,
        notebookid INTEGER REFERENCES notebooks(notebookid) ON DELETE CASCADE,
        snippetname VARCHAR(100),
        code TEXT
      );
    `);

    console.log("Finished building tables!");
  } catch (err) {
    console.log("Error building tables!");
    throw err;
  }
};

const createNotebookWithSnippets = async (notebook) => {
  try {
    // Insert the notebook
    const notebookQuery = await db.query(`
      INSERT INTO notebooks (notebookname, language, notes, createdat)
      VALUES ($1, $2, $3, $4) RETURNING notebookid;
    `, [notebook.notebookName, notebook.language, notebook.notes, notebook.createdAt]);

    const notebookId = notebookQuery.rows[0].notebookid;

    // Insert snippets associated with the notebook
    for (const snippet of notebook.snippet) {
      await db.query(`
        INSERT INTO snippets (notebookid, snippetname, code)
        VALUES ($1, $2, $3);
      `, [notebookId, snippet.snippetName, snippet.code]);
    }

  } catch (err) {
    console.error("Error inserting notebook and snippets:", err);
    throw err;
  }
};

const insertNotebooks = async () => {
  try {
    for (const notebook of notebooks) {
      await createNotebookWithSnippets(notebook);
    }
    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error inserting seed data:", error);
  }
};

const seedDatabase = async () => {
  try {
    await db.connect();
    await dropTables(); // Drop the tables before creating new ones
    await createTables(); // Create the notebooks and snippets tables
    await insertNotebooks(); // Insert seed data
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await db.end(); // Close the database connection
  }
};

seedDatabase();
