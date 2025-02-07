const app = require('./app'); // Importing the app configuration

const PORT = process.env.PORT || 3000; // Default to port 3000 if not provided
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});