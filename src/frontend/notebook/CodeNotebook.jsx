import React, { useState, useEffect } from "react";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeNotebook = () => {
  const [notebooks, setNotebooks] = useState([]);
  const [currentNotebook, setCurrentNotebook] = useState("Default");
  const [snippets, setSnippets] = useState([]);
  const [code, setCode] = useState("");
  const [name, setName] = useState(""); // Add state to store snippet name
  const [language, setLanguage] = useState("javascript");
  const [newNotebookName, setNewNotebookName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingNotebookName, setEditingNotebookName] = useState(""); // State for editing notebook names

  const DATABASE_URL = "http://localhost:3000"; // Corrected the URL to include http://

  // Fetch notebooks from API
  useEffect(() => {
    axios.get(`${DATABASE_URL}/api/notebooks`)
      .then(response => setNotebooks(response.data))
      .catch(error => console.error("Error fetching notebooks:", error));
  }, []);

  // Fetch snippets based on the current notebook
  useEffect(() => {
    if (currentNotebook) {
      axios.get(`${DATABASE_URL}/api/snippets/${currentNotebook}`)
        .then(response => setSnippets(response.data))
        .catch(error => console.error("Error fetching snippets:", error));
    }
  }, [currentNotebook]);

  // Save or update a snippet
  const saveSnippet = () => {
    if (!code.trim()) return;
    const snippetData = { notebook_id: currentNotebook, snippetname: name, code, language };

    if (editingIndex !== null) {
      // Update snippet API request
      axios.put(`${DATABASE_URL}/api/snippets/${snippets[editingIndex].id}`, snippetData)
        .then(response => {
          const updatedSnippets = snippets.map((snippet, index) =>
            index === editingIndex ? response.data.snippet : snippet
          );
          setSnippets(updatedSnippets);
          setEditingIndex(null);
        })
        .catch(error => console.error("Error updating snippet:", error));
    } else {
      // Add new snippet API request
      axios.post(`${DATABASE_URL}/api/snippets`, snippetData)
        .then(response => {
          // Update snippets state with the new snippet
          setSnippets(prevSnippets => [...prevSnippets, response.data.snippet]);
        })
        .catch(error => console.error("Error adding snippet:", error));
    }

    setCode("");
    setName(""); // Reset name input
  };

  // Delete a snippet
  const deleteSnippet = (id) => {
    axios.delete(`${DATABASE_URL}/api/snippets/${id}`)
      .then(() => {
        const updatedSnippets = snippets.filter(snippet => snippet.id !== id);
        setSnippets(updatedSnippets);
      })
      .catch(error => console.error("Error deleting snippet:", error));
  };

  // Edit a snippet
  const editSnippet = (index) => {
    setName(snippets[index].name); // Set the current name when editing
    setCode(snippets[index].code);
    setLanguage(snippets[index].language);
    setEditingIndex(index);
  };

  // Add a new notebook
  const addNotebook = () => {
    if (!newNotebookName.trim() || notebooks.some(notebook => notebook.name === newNotebookName)) {
      console.error("Notebook name is empty or already exists");
      return;
    }
    axios.post(`${DATABASE_URL}/api/notebooks`, { name: newNotebookName })
      .then(response => {
        setNotebooks(prevNotebooks => [...prevNotebooks, response.data.notebook]);
        setNewNotebookName(""); // Clear the input after adding
        console.log("Notebook added successfully!");
      })
      .catch(error => {
        console.error("Error adding notebook:", error);
        alert("Error adding notebook!");
      });
  };

  // Delete a notebook
  const deleteNotebook = (notebookName) => {
    if (notebookName === "Default") return; // Prevent deleting the default notebook
    axios.delete(`${DATABASE_URL}/api/notebooks/${notebookName}`)
      .then(() => {
        const updatedNotebooks = notebooks.filter(notebook => notebook.name !== notebookName);
        setNotebooks(updatedNotebooks);
        setCurrentNotebook(updatedNotebooks[0] || "Default"); // Switch to a different notebook if needed
      })
      .catch(error => console.error("Error deleting notebook:", error));
  };

  // Rename a notebook
  const renameNotebook = () => {
    if (!editingNotebookName.trim() || notebooks.some(notebook => notebook.name === editingNotebookName)) return;
    axios.put(`${DATABASE_URL}/api/notebooks/${currentNotebook}`, { name: editingNotebookName })
      .then(response => {
        const updatedNotebooks = notebooks.map((notebook) =>
          notebook.name === currentNotebook ? response.data.notebook : notebook
        );
        setNotebooks(updatedNotebooks);
        setCurrentNotebook(editingNotebookName); // Update current notebook name
        setEditingNotebookName(""); // Reset input after renaming
      })
      .catch(error => console.error("Error renaming notebook:", error));
  };

  // Filter snippets based on search term
  const filteredSnippets = snippets.filter((snippet) =>
    snippet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snippet.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-4 bg-black text-white rounded-lg shadow-lg">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search snippets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full bg-gray-800 rounded-md text-white"
        />
      </div>

      {/* Notebook Management */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <button onClick={() => setEditingNotebookName(currentNotebook)} className="mr-4 text-blue-400">Rename Notebook</button>
          <button onClick={() => deleteNotebook(currentNotebook)} className="text-red-400">Delete Notebook</button>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={newNotebookName}
            onChange={(e) => setNewNotebookName(e.target.value)}
            className="p-2 w-40 bg-gray-800 rounded-md text-white"
            placeholder="New notebook name"
          />
          <button onClick={addNotebook} className="ml-2 text-green-400">Add Notebook</button>
        </div>
      </div>

      {/* Notebook List */}
      <div className="mb-4">
        <select
          value={currentNotebook}
          onChange={(e) => setCurrentNotebook(e.target.value)}
          className="p-2 w-full bg-gray-800 rounded-md text-white"
        >
          {notebooks.map((notebook) => (
            <option key={notebook.name} value={notebook.name}>
              {notebook.name}
            </option>
          ))}
        </select>
      </div>

      {/* Snippets List */}
      <div className="mb-4">
        {filteredSnippets.length === 0 ? (
          <p>No snippets found.</p>
        ) : (
          filteredSnippets.map((snippet, index) => (
            <div key={snippet.id} className="bg-black p-4 mb-2 rounded-md">
              <div className="flex justify-between">
                <h3 className="font-semibold">{snippet.name}</h3>
                <div>
                  <button onClick={() => editSnippet(index)} className="text-blue-400">Edit</button>
                  <button onClick={() => deleteSnippet(snippet.id)} className="ml-2 text-red-400">Delete</button>
                </div>
              </div>
              <SyntaxHighlighter language={snippet.language} style={dracula}>
                {snippet.code}
              </SyntaxHighlighter>
            </div>
          ))
        )}
      </div>

      {/* Add/Edit Snippet Form */}
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Snippet name"
          className="p-2 w-full bg-gray-800 rounded-md text-white mb-2"
        />
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code here..."
          className="p-2 w-full bg-gray-800 rounded-md text-white mb-2"
          rows="6"
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 w-full bg-gray-800 rounded-md text-white mb-2"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          {/* Add more languages as needed */}
        </select>
        <button onClick={saveSnippet} className="w-full p-2 bg-green-500 text-white rounded-md">
          {editingIndex !== null ? "Save Snippet" : "Add Snippet"}
        </button>
      </div>
    </div>
  );
};

export default CodeNotebook;
