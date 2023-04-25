import { useState } from "react";

function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    return (
        <form className="login-form">
            <h3>Become a Stix Member</h3>
            <lable htmlFor="username">Username </lable>
            <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <lable htmlFor="email">email </lable>
            <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            <lable htmlFor="passwordConfirmation">Confirm Password </lable>
            <input
            type="text"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <br/>
        </form>
    )
}
export default SignupForm;