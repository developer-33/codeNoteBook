import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = () => {
  const [snippets, setSnippets] = useState([]);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
    const savedSnippets = JSON.parse(localStorage.getItem("snippets")) || [];
    setSnippets(savedSnippets);
  }, []);

  const saveSnippet = () => {
    if (!code.trim()) return;
    const newSnippets = [...snippets, { code, language }];
    setSnippets(newSnippets);
    localStorage.setItem("snippets", JSON.stringify(newSnippets));
    setCode("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Code Notebook</h2>

      <select
        className="p-2 bg-gray-800 text-white rounded mb-2"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
      </select>

      <textarea
        className="w-full p-2 bg-gray-800 text-white rounded mb-2"
        rows="4"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code snippet..."
      />

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded"
        onClick={saveSnippet}
      >
        Save Snippet
      </button>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Saved Snippets</h3>
        {snippets.length === 0 ? (
          <p className="text-gray-400">No snippets saved yet.</p>
        ) : (
          snippets.map((snippet, index) => (
            <div key={index} className="bg-gray-800 p-3 my-2 rounded">
              <SyntaxHighlighter language={snippet.language} style={dracula}>
                {snippet.code}
              </SyntaxHighlighter>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CodeSnippet;
