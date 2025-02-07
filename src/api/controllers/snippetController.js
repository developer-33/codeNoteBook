const db = require("../../db/client"); // Assuming your db client is set up properly

// Get all snippets for a specific notebook
const getSnippetsByNotebookId = async (notebookId) => {
  const result = await db.query("SELECT * FROM snippets WHERE notebookid = $1", [notebookId]);
  return result.rows;
};

// Create a new snippet
const createSnippet = async (notebookId, snippetname, code, language) => {
  const result = await db.query(
    "INSERT INTO snippets (notebookid, snippetname, code, language) VALUES ($1, $2, $3, $4) RETURNING *",
    [notebookId, snippetname, code, language]
  );
  return result.rows[0]; // Return the newly created snippet
};

// Update a snippet's name and code
const updateSnippet = async (id, snippetname, code) => {
  const result = await db.query(
    "UPDATE snippets SET snippetname = $1, code = $2 WHERE snippetid = $3 RETURNING *",
    [snippetname, code, id]
  );
  return result.rows[0]; // Return the updated snippet
};

// Delete a snippet
const deleteSnippet = async (id) => {
  const result = await db.query("DELETE FROM snippets WHERE snippetid = $1 RETURNING *", [id]);
  return result.rows[0]; // Return the deleted snippet
};

module.exports = {
  getSnippetsByNotebookId,
  createSnippet,
  updateSnippet,
  deleteSnippet,
};
