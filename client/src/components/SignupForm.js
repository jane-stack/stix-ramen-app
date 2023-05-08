import { useContext, useState } from "react";
import { UserContext } from "./User";
import { useHistory } from "react-router-dom";

function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const {signup} = useContext(UserContext);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username,
                email, 
                password,
                password_confirmation: passwordConfirmation
             }),
        })
        .then(resp => resp.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                history.push('/')
            } else {
                setUsername("")
                setEmail("")
                setPassword("")
                setPasswordConfirmation("")
                const errorlist = user.errors.map(e => <ul>{e}</ul>)
                setErrors(errorlist)
            }
        })
    }


    return (
        <form className="login-form" onSubmit={handleSubmit}>
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
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <br/>
            {errors.map((err) => (
                <p key={err} style={{color: "red"}}>
                    {err}
                </p>
             ))}
            <button type="submit">Sign Me Up</button>
        </form>
    )
}
export default SignupForm;