import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      navigate("/admin/dashboard");

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* LEFT SECTION */}
        <div className="login-left">
          <h1>SOFT Admin</h1>
          <p>
            Manage Academics, Admissions, Examinations and more.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="login-right">
          <h2>Admin Login</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </div>

      </div>
    </div>
  );
}

export default Login;