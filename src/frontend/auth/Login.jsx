import React, { useState } from "react";
import { userLogin } from "../index";
import { Navigate } from "react-router-dom";

function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [toProfile, setToProfile] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await userLogin(username, password);
        sessionStorage.setItem("token", response.data.token);

        if (response.success) {
            console.log(response.success);
            return <Navigate to="/" />;
        } else {
            setError(response.error);
            console.error(error);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-400 bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-white mb-4">Log In</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <p className={`text-sm mt-1 ${username.length < 8 ? 'text-red-400' : 'text-green-400'}`}>
                            {username.length < 8 ? "Username must be at least 8 characters" : "Username is good to go"}
                        </p>
                    </div>

                    <div>
                        <label className="block text-gray-300">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <button className="w-full p-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
