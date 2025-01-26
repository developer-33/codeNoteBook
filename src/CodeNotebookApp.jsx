import React, { useState, useEffect } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { saveAs } from 'file-saver';
// Uncomment the Firebase imports if using cloud sync
// import { getDatabase, ref, set, get } from 'firebase/database';

const CodeNotebookApp = () => {
  const [notebooks, setNotebooks] = useState([]);
  const [notebookName, setNotebookName] = useState('');
  const [selectedNotebook, setSelectedNotebook] = useState(null);
  const [codeInput, setCodeInput] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [searchQuery, setSearchQuery] = useState('');

  // Function to add a new notebook
  const addNotebook = () => {
    if (notebookName.trim()) {
      setNotebooks((prev) => [...prev, { name: notebookName, snippets: [] }]);
      setNotebookName('');
    }
  };

  // Function to add a snippet to the selected notebook
  const addSnippet = () => {
    if (selectedNotebook && codeInput.trim()) {
      setNotebooks((prev) =>
        prev.map((notebook) =>
          notebook.name === selectedNotebook
            ? {
                ...notebook,
                snippets: [
                  ...notebook.snippets,
                  { code: codeInput, tags: tagsInput.split(',').map((tag) => tag.trim()), language },
                ],
              }
            : notebook
        )
      );
      setCodeInput('');
      setTagsInput('');
    }
  };

  // Function to delete a snippet
  const deleteSnippet = (index) => {
    setNotebooks((prev) =>
      prev.map((notebook) =>
        notebook.name === selectedNotebook
          ? { ...notebook, snippets: notebook.snippets.filter((_, i) => i !== index) }
          : notebook
      )
    );
  };

  // Function to delete a notebook
  const deleteNotebook = (name) => {
    setNotebooks((prev) => prev.filter((notebook) => notebook.name !== name));
    if (selectedNotebook === name) setSelectedNotebook(null);
  };

  // Function to rename a notebook
  const renameNotebook = (oldName, newName) => {
    setNotebooks((prev) =>
      prev.map((notebook) =>
        notebook.name === oldName ? { ...notebook, name: newName } : notebook
      )
    );
    if (selectedNotebook === oldName) setSelectedNotebook(newName);
  };

  // Export notebook to JSON
  const exportNotebook = (name) => {
    const notebook = notebooks.find((n) => n.name === name);
    const blob = new Blob([JSON.stringify(notebook, null, 2)], { type: 'application/json' });
    saveAs(blob, `${name}.json`);
  };

  // Search filtered snippets
  const getFilteredSnippets = () => {
    const notebook = notebooks.find((n) => n.name === selectedNotebook);
    return notebook
      ? notebook.snippets.filter((snippet) =>
          snippet.code.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];
  };

  // Uncomment for Firebase integration
  // const saveToCloud = async () => {
  //   const db = getDatabase();
  //   await set(ref(db, 'notebooks'), notebooks);
  // };

  // const fetchFromCloud = async () => {
  //   const db = getDatabase();
  //   const snapshot = await get(ref(db, 'notebooks'));
  //   if (snapshot.exists()) setNotebooks(snapshot.val());
  // };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Code Notebook App</h1>

      {/* Add Notebook Section */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="New Notebook Name"
          value={notebookName}
          onChange={(e) => setNotebookName(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <button onClick={addNotebook} className="bg-blue-500 text-white py-2 px-4 rounded">
          Add Notebook
        </button>
      </div>

      {/* Select Notebook Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Select Notebook</h2>
        <div className="flex flex-wrap gap-2">
          {notebooks.map((notebook) => (
            <div key={notebook.name} className="flex items-center">
              <button
                onClick={() => setSelectedNotebook(notebook.name)}
                className={`py-2 px-4 rounded ${
                  selectedNotebook === notebook.name
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                {notebook.name}
              </button>
              <button
                onClick={() => deleteNotebook(notebook.name)}
                className="bg-red-500 text-white text-sm py-1 px-2 ml-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Snippet Section */}
      {selectedNotebook && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Add Snippet to {selectedNotebook}</h2>
          <textarea
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value)}
            placeholder="Write your code snippet here..."
            className="w-full p-2 border rounded mb-4 font-mono"
            rows={6}
          />
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 border rounded mb-4"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="html">HTML</option>
          </select>
          <button onClick={addSnippet} className="bg-blue-500 text-white py-2 px-4 rounded">
            Add Snippet
          </button>
        </div>
      )}

      {/* Search and Snippets Section */}
      {selectedNotebook && (
        <div>
          <h2 className="text-xl font-bold mb-2">Search Snippets</h2>
          <input
            type="text"
            placeholder="Search snippets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />

          <h2 className="text-xl font-bold mb-2">Snippets in {selectedNotebook}</h2>
          {getFilteredSnippets().map((snippet, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="text-sm font-bold mb-1">Snippet {index + 1}</h3>
                <button
                  onClick={() => deleteSnippet(index)}
                  className="bg-red-500 text-white text-sm py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
              <SyntaxHighlighter language={snippet.language} style={dracula}>
                {snippet.code}
              </SyntaxHighlighter>
              <div className="flex flex-wrap gap-2 mt-2">
                {snippet.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={() => exportNotebook(selectedNotebook)}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Export Notebook
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeNotebookApp;
