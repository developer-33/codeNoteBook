const db = require("./client");

// Create a Notebook
const createNotebook = async ({ name }) => {
  try {
    const {
      rows: [notebook],
    } = await db.query(
      `INSERT INTO notebooks (name) VALUES ($1) RETURNING *;`,
      [name]
    );
    return notebook;
  } catch (err) {
    throw err;
  }
};

// Get a Notebook by ID
const getNotebookById = async (id) => {
  try {
    const {
      rows: [notebook],
    } = await db.query(`SELECT * FROM notebooks WHERE id = $1;`, [id]);
    return notebook;
  } catch (err) {
    throw err;
  }
};

// Get All Notebooks
const getAllNotebooks = async () => {
  try {
    const { rows } = await db.query(`SELECT * FROM notebooks;`);
    return rows;
  } catch (err) {
    throw err;
  }
};

// Create a Snippet
const createSnippet = async ({ notebook_id, code, tags, language }) => {
  try {
    const {
      rows: [snippet],
    } = await db.query(
      `INSERT INTO snippets (notebook_id, code, tags, language) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [notebook_id, code, tags, language]
    );
    return snippet;
  } catch (err) {
    throw err;
  }
};

// Get Snippet by ID
const getSnippetById = async (id) => {
  try {
    const {
      rows: [snippet],
    } = await db.query(`SELECT * FROM snippets WHERE id = $1;`, [id]);
    return snippet;
  } catch (err) {
    throw err;
  }
};

// Get All Snippets
const getAllSnippets = async () => {
  try {
    const { rows } = await db.query(`SELECT * FROM snippets;`);
    return rows;
  } catch (err) {
    throw err;
  }
};

// Get Snippets by Notebook ID
const getSnippetsByNotebookId = async (notebook_id) => {
  try {
    const { rows } = await db.query(`SELECT * FROM snippets WHERE notebook_id = $1;`, [notebook_id]);
    return rows;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createNotebook,
  getNotebookById,
  getAllNotebooks,
  createSnippet,
  getSnippetById,
  getAllSnippets,
  getSnippetsByNotebookId,
};
