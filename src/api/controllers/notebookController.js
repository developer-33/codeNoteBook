const db = require("../../db/client"); // Assuming your db client is set up properly

// Get all notebooks
const getAllNotebooks = async () => {
  const result = await db.query("SELECT * FROM notebooks");
  return result.rows;
};

// Get a notebook by ID
const getNotebookById = async (id) => {
  const result = await db.query("SELECT * FROM notebooks WHERE notebookid = $1", [id]);
  return result.rows[0]; // Returns a single notebook or null
};

// Create a new notebook
const createNotebook = async (name, language, notes) => {
  const result = await db.query(
    "INSERT INTO notebooks (notebookname, language, notes) VALUES ($1, $2, $3) RETURNING *",
    [name, language, notes]
  );
  return result.rows[0]; // Return the newly created notebook
};

// Update a notebook's name
const updateNotebook = async (id, newName) => {
  const result = await db.query(
    "UPDATE notebooks SET notebookname = $1 WHERE notebookid = $2 RETURNING *",
    [newName, id]
  );
  return result.rows[0]; // Return the updated notebook
};

// Delete a notebook
const deleteNotebook = async (id) => {
  const result = await db.query("DELETE FROM notebooks WHERE notebookid = $1 RETURNING *", [id]);
  return result.rows[0]; // Return the deleted notebook
};

module.exports = {
  getAllNotebooks,
  getNotebookById,
  createNotebook,
  updateNotebook,
  deleteNotebook,
};
