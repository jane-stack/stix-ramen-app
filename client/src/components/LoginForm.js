import { useContext, useState } from "react";
import { UserContext } from "./User";
import { useHistory } from "react-router-dom";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const {login} = useContext(UserContext);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
        .then(resp => resp.json())
        .then(user => {
            if (!user.errors) {
                login(user)
                history.push('/')
            } else {
                setUsername("")
                setPassword("")
                const errorlist = user.errors.map(e => <ul>{e}</ul>)
                setErrors(errorlist)
            }
        })
    }
    
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h3>Login to Stix</h3>
            Username &nbsp;
            <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            {errors.map((err) => (
                <p key={err} style={{color: "red"}}>
                    {err}
                </p>
             ))}
            <button type="submit">Log Me In</button>
        </form>
    )
}
export default LoginForm;