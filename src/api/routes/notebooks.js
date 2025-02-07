// const express = require("express");
// const notebookRouter = express.Router();
// const db = require("../src/server/db/client"); // Adjusted import path to match your app structure




// notebookRouter.get("/", notebookController.getAllNotebooks);
// notebookRouter.get("/:id", notebookController.getNotebookById);
// notebookRouter.post("/", notebookController.createNotebook);
// notebookRouter.put("/:id", notebookController.updateNotebook);
// notebookRouter.delete("/:id", notebookController.deleteNoteboo

// // Middleware for input validation
// const validateNotebookData = (req, res, next) => {
//   const { name, language, notes } = req.body;
//   if (!name || !language) {
//     return res.status(400).json({ message: "Name and language are required" });
//   }
//   next();
// };

// // Get all notebooks
// notebookRouter.get("/", async (req, res) => {
//   try {
//     const result = await db.query("SELECT * FROM notebooks");
//     res.status(200).json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error fetching notebooks" });
//   }
// });

// // Rename a notebook
// notebookRouter.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   try {
//     const result = await db.query(
//       "UPDATE notebooks SET notebookname = $1 WHERE notebookid = $2 RETURNING *",
//       [name, id]
//     );
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Notebook not found" });
//     }
//     res.status(200).json({ message: "Notebook renamed!", notebook: result.rows[0] });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error renaming notebook" });
//   }
// });

// // Add a new notebook
// notebookRouter.post("/", validateNotebookData, async (req, res) => {
//   const { name, language, notes } = req.body;
//   try {
//     const result = await db.query(
//       "INSERT INTO notebooks (notebookname, language, notes) VALUES ($1, $2, $3) RETURNING *",
//       [name, language, notes]
//     );
//     res.status(201).json({ message: "Notebook added!", notebook: result.rows[0] });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error adding notebook" });
//   }
// });

// // Get a single notebook by ID
// notebookRouter.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await db.query("SELECT * FROM notebooks WHERE notebookid = $1", [id]);
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Notebook not found" });
//     }
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error fetching notebook" });
//   }
// });

// // Delete a notebook
// notebookRouter.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await db.query("DELETE FROM notebooks WHERE notebookid = $1 RETURNING *", [id]);
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Notebook not found" });
//     }
//     res.status(200).json({ message: "Notebook deleted!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error deleting notebook" });
//   }
// });

// module.exports = notebookRouter;


const express = require('express');
const notebookRouter = express.Router();
const notebookController = require('../controllers/notebookController');

notebookRouter.get('/', notebookController.getAllNotebooks);
notebookRouter.post('/', notebookController.createNotebook);
notebookRouter.get('/:id', notebookController.getNotebookById);
notebookRouter.put('/:id', notebookController.updateNotebook);
notebookRouter.delete('/:id', notebookController.deleteNotebook);

module.exports = notebookRouter;
