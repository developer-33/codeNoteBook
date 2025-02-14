
const express = require('express')
const router = require('vite-express'



    const {requireUser} = require("./")
)


// Create a notebook
app.post("/notebooks", async (req, res) => {
    const { name } = req.body;
    await pool.query("INSERT INTO notebooks (name) VALUES ($1) ON CONFLICT (name) DO NOTHING", [name]);
    res.json({ message: "Notebook created" });
  });
  


// Get snippets for a notebook
app.get("/snippets/:notebookId", async (req, res) => {
    const { notebookId } = req.params;
    const { rows } = await pool.query("SELECT * FROM snippets WHERE notebook_id = $1", [notebookId]);
    res.json(rows);
  });
  
  // Add a snippet
  app.post("/snippets", async (req, res) => {
    const { notebookId, code, tags, language } = req.body;
    await pool.query(
      "INSERT INTO snippets (notebook_id, code, tags, language) VALUES ($1, $2, $3, $4)",
      [notebookId, code, tags, language]
    );
    res.json({ message: "Snippet added" });
  });
  
  // Delete a notebook
  app.delete("/notebooks/:id", async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM notebooks WHERE id = $1", [id]);
    res.json({ message: "Notebook deleted" });
  });
  
  // Delete a snippet
  app.delete("/snippets/:id", async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM snippets WHERE id = $1", [id]);
    res.json({ message: "Snippet deleted" });
  });
  