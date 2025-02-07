const express = require('express');
const notebookRouter = require('../api/routes/notebooks');
const snippetRouter = require('../api/routes/snippets');
const errorMiddleware = require('../middleware/errorMiddleware');
const cors = require("cors");
const app = express();

// Global CORS setup
app.use(cors({
  origin: "http://127.0.0.1:5173",  // Allow only requests from this origin (React frontend)
  methods: "GET,POST,PUT,DELETE",   // Allow these methods
  allowedHeaders: "Content-Type,Authorization"  // Allow these headers
}));

// Middleware for parsing JSON request bodies
app.use(express.json());

// Use routes for notebooks and snippets
app.use('/api/notebooks', notebookRouter);
app.use('/api/snippets', snippetRouter);

// Global error handler middleware
app.use(errorMiddleware);

module.exports = app;
