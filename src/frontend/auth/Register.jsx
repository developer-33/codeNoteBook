import { useState } from "react";
// import { registerUser } from "../api/index";


const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();  
        const response = await registerUser(username, password)
        sessionStorage.setItem("token", response.data.token)
        if (response.success) {
            return response;
        } else {
            setError(response.error);
        }
    }

    return (
        <div>        
            <h2 className="sign-up">Sign Up</h2>
            { error && <p>{error}</p> }
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} minLength={8} required/>
                </label>
                <br />
                <label>
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required/>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>        
        </div>
    )
    
 
}
export default SignUpForm;