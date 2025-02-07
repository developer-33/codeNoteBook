import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeNotebook = () => {
  const [notebooks, setNotebooks] = useState({ Default: [] });
  const [currentNotebook, setCurrentNotebook] = useState('Default');
  const [snippetTitle, setSnippetTitle] = useState('');
  const [codeInput, setCodeInput] = useState('');
  const [newNotebook, setNewNotebook] = useState('');

  const handleSaveSnippet = () => {
    if (snippetTitle.trim() && codeInput.trim()) {
      setNotebooks((prev) => ({
        ...prev,
        [currentNotebook]: [
          ...prev[currentNotebook],
          { title: snippetTitle, code: codeInput },
        ],
      }));
      setSnippetTitle('');
      setCodeInput('');
    }
  };

  const handleCreateNotebook = () => {
    if (newNotebook.trim() && !notebooks[newNotebook]) {
      setNotebooks((prev) => ({ ...prev, [newNotebook]: [] }));
      setCurrentNotebook(newNotebook);
      setNewNotebook('');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Code Notebook</h1>

      {/* Notebook Selector */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Select Notebook</label>
        <select
          value={currentNotebook}
          onChange={(e) => setCurrentNotebook(e.target.value)}
          className="p-2 border rounded w-full mb-2"
        >
          {Object.keys(notebooks).map((notebook) => (
            <option key={notebook} value={notebook}>
              {notebook}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          <input
            type="text"
            value={newNotebook}
            onChange={(e) => setNewNotebook(e.target.value)}
            placeholder="Create new notebook"
            className="p-2 border rounded flex-grow"
          />
          <button
            onClick={handleCreateNotebook}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add Notebook
          </button>
        </div>
      </div>

      {/* Snippet Input */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Snippet Title</label>
        <input
          type="text"
          value={snippetTitle}
          onChange={(e) => setSnippetTitle(e.target.value)}
          placeholder="Snippet title"
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          placeholder="Write your code snippet here..."
          className="w-full p-2 border rounded mb-4 text-sm font-mono"
          rows={6}
        />
        <button
          onClick={handleSaveSnippet}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Snippet
        </button>
      </div>

      {/* Display Saved Snippets */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Snippets in "{currentNotebook}"</h2>
        {notebooks[currentNotebook].length === 0 ? (
          <p className="text-gray-500">No snippets saved in this notebook yet.</p>
        ) : (
          notebooks[currentNotebook].map((snippet, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-sm font-bold mb-1">
                {index + 1}. {snippet.title}
              </h3>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {snippet.code}
              </SyntaxHighlighter>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CodeNotebook;
