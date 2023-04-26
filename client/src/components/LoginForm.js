import { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        console.log("HELLO")
    }
    
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h3>Login to Stix</h3>
            <lable htmlFor="username">Username </lable>
            <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <lable htmlFor="password">Password </lable>
            <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <button type="submit">Log Me In</button>
        </form>
    )
}
export default LoginForm;