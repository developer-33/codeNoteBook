// const express = require("express");
// const snippetRouter = express.Router();
// const db = require("../src/server/db/client"); // Adjusted import to match app structure

// // Middleware for validating snippet data
// const validateSnippetData = (req, res, next) => {
//   const { notebook_id, snippetname, code, language } = req.body;
//   if (!notebook_id || !snippetname || !code || !language) {
//     return res.status(400).json({ message: "All fields (notebook_id, snippetname, code, language) are required" });
//   }
//   next();
// };

// // Get snippets for a notebook
// snippetRouter.get("/:notebook_id", async (req, res) => {
//   const { notebook_id } = req.params;
//   try {
//     const result = await db.query("SELECT * FROM snippets WHERE notebookid = $1", [notebook_id]);
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "No snippets found for this notebook" });
//     }
//     res.status(200).json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error fetching snippets" });
//   }
// });

// // Add a new snippet
// snippetRouter.post("/", validateSnippetData, async (req, res) => {
//   const { notebook_id, snippetname, code, language } = req.body;
//   try {
//     const result = await db.query(
//       "INSERT INTO snippets (notebookid, snippetname, code, language) VALUES ($1, $2, $3, $4) RETURNING *",
//       [notebook_id, snippetname, code, language]
//     );
//     res.status(201).json({ message: "Snippet added!", snippet: result.rows[0] });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error adding snippet" });
//   }
// });

// // Rename or update a snippet
// snippetRouter.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { snippetname, code } = req.body; // New name and code for the snippet
//   try {
//     const result = await db.query(
//       "UPDATE snippets SET snippetname = $1, code = $2 WHERE snippetid = $3 RETURNING *",
//       [snippetname, code, id]
//     );
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Snippet not found" });
//     }
//     res.status(200).json({ message: "Snippet renamed and updated!", snippet: result.rows[0] });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error renaming and updating snippet" });
//   }
// });

// // Delete a snippet
// snippetRouter.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await db.query("DELETE FROM snippets WHERE snippetid = $1 RETURNING *", [id]);
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Snippet not found" });
//     }
//     res.status(200).json({ message: "Snippet deleted!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error deleting snippet" });
//   }
// });

// module.exports = snippetRouter;

const express = require("express");
const snippetRouter = express.Router();
const snippetController = require("../controllers/snippetController");

snippetRouter.get("/:notebook_id", snippetController.getSnippetsByNotebookId);
snippetRouter.post("/", snippetController.createSnippet);
snippetRouter.put("/:id", snippetController.updateSnippet);
snippetRouter.delete("/:id", snippetController.deleteSnippet);

module.exports = snippetRouter
