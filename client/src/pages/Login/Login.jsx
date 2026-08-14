import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-brand">
          <div className="login-logo">🎓</div>

          <h1>Campus Connect</h1>

          <p>
            Discover. Connect. Experience.
          </p>
        </div>

        <div className="login-card">

          <div className="login-header">
            <h2>Welcome Back</h2>

            <p>
              Login to continue to Campus Connect
            </p>
          </div>

          <form onSubmit={handleLogin}>

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
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="login-options">

              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#forgot">
                Forgot password?
              </a>

            </div>

            <button
              type="submit"
              className="login-submit"
            >
              Login →
            </button>

          </form>

          <div className="login-divider">
            <span>or</span>
          </div>

          <p className="signup-text">
            Don't have an account?
            <Link to="/register">
              Create Account
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

export default Login;