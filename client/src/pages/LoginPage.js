import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function LoginPage() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="forms">
            {showLogin ? (
                <>
                <LoginForm />
                <p className="words">Join Stix Community? &nbsp;
                    <button onClick={() => setShowLogin(false)}>Sign Up</button>
                </p>
                </>
            ):(
                <>
                <SignupForm/>
                <p className="words">Already a member? &nbsp;
                    <button onClick={() => setShowLogin(true)}>Log In</button>
                </p>
                </>
            )}
        </div>
    )
}

export default LoginPage;