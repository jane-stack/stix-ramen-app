import { useState } from "react";

function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    return (
        <form className="login-form">
            <h3>Become a Stix Member</h3>
            Username &nbsp;
            <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            Email &nbsp;
            <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            Password &nbsp;
            <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            Confirm Password &nbsp;
            <input
            type="text"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <br/>
            <button type="submit">Sign Me Up</button>
        </form>
    )
}
export default SignupForm;