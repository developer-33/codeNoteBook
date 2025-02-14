const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Configure Multer storage
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// API route to upload file
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({ imageUrl: `http://localhost:5000/uploads/${req.file.filename}` });
});

app.use("/uploads", express.static("uploads"));

app.listen(5000, () => console.log("Server running on port 5000"));
