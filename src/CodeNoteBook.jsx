import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeNotebook = () => {
  const [snippets, setSnippets] = useState([]);
  const [codeInput, setCodeInput] = useState('');

  const handleSave = () => {
    if (codeInput.trim()) {
      setSnippets((prev) => [...prev, codeInput]);
      setCodeInput(''); // Clear the input after saving
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Code Notebook</h1>
      {/* Input Section */}
      <textarea
        value={codeInput}
        onChange={(e) => setCodeInput(e.target.value)}
        placeholder="Write your code snippet here..."
        className="w-full p-2 border rounded mb-4 text-sm font-mono"
        rows={6}
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Save Snippet
      </button>

      {/* Saved Snippets */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Saved Snippets</h2>
        {snippets.length === 0 ? (
          <p className="text-gray-500">No snippets saved yet.</p>
        ) : (
          snippets.map((snippet, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-sm font-bold mb-1">Snippet {index + 1}</h3>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {snippet}
              </SyntaxHighlighter>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CodeNotebook;