import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";


let notebooks = 
[
{
    notebook_id:1,
    name:"string",
    created_at: "2025-02-14T12:00:00.000Z",
},
{
    notebook_id:2,
    name:"string",
    created_at: "2025-02-14T12:00:00.000Z",
},
{
    notebook_id:3,
    name:"string",
    created_at: "2025-02-14T12:00:00.000Z",
},
{
    notebook_id:4,
    name:"string",
    created_at: "2025-02-14T12:00:00.000Z",
},

]

let snippets = [
{
    snippets_id:1,
    notebook_id:1,
    code:"string",
    tags:"string",
    language:"string",
    created_at: "2025-02-14T12:00:00.000Z",



}

]




CREATE TABLE notebooks (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
);

CREATE TABLE snippets (
    id SERIAL PRIMARY KEY,
    notebook_id INT REFERENCES notebooks(id) ON DELETE CASCADE,
    code TEXT NOT NULL,
    tags TEXT[],
    language TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
