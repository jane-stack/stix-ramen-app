import { useState } from "react";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";

function LoginPage() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="forms">
            {showLogin ? (
                <>
                <LoginForm />
                <p className="words">Don't have an account? &nbsp;
                    <button onClick={() => setShowLogin(false)}>Sign Up</button>
                </p>
                </>
            ):(
                <>
                <SignupForm/>
                <p className="words">Already have an account? &nbsp;
                    <button onClick={() => setShowLogin(true)}>Log In</button>
                </p>
                </>
            )}
        </div>
    )
}

export default LoginPage;