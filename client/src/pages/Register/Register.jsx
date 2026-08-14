import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        alert("Account created successfully!");

        navigate("/login");
    };

    return (
        <div className="register-page">

            <div className="register-container">

                <div className="register-brand">

                    <div className="register-logo">
                        🎓
                    </div>

                    <h1>Campus Connect</h1>

                    <p>
                        Join your campus community
                    </p>

                </div>

                <div className="register-card">

                    <div className="register-header">

                        <h2>Create Account</h2>

                        <p>
                            Create your account to discover campus events
                        </p>

                    </div>

                    <form onSubmit={handleRegister}>

                        <div className="form-group">
                            <label>Full Name</label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>

                            <input
                                type="password"
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>

                            <input
                                type="password"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="register-submit"
                        >
                            Create Account →
                        </button>

                    </form>

                    <p className="login-text">
                        Already have an account?
                        <Link to="/login">
                            Login
                        </Link>
                    </p>

                    <Link
                        to="/"
                        className="back-home"
                    >
                        ← Back to Campus Connect
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Register;