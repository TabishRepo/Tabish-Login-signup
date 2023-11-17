import React, { useState } from "react";
import axios from "axios";
import "../Styles/AuthenticationStyles.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [phone, setphone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validations
    if (!name || !email || !password || !confirmPassword || !phone) {
      toast.error("All fields are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a correct email format (example@gmail.com)");
      return;
    }

    if (
      password.length < 8 ||
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}/.test(password)
    ) {
      toast.error(
        "Password must be at least 8 characters with one lowercase, one uppercase, one digit, and one special character"
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Both passsword should match ");
      return;
    }

    if (!/^\d{11}$/.test(phone)) {
      toast.error(
        "Phone number must be 11 digits long and contain only numbers"
      );
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
        confirmPassword,
        phone,
      });
      if (res && res.data.success) {
        console.log(res);
        toast.success("Register successfully ");
        navigate("/Login");
      } else {
        toast.error("Already used Email");
      }
    } catch (error) {
      console.log(error);
      toast.error("There is an error");
    }

    // Continue with form submission logic
  };

  return (
    <div>
      <div className="get2">
        <div className="containerss">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Username"
                required
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <div>
              <input
                type="email"
                value={email}
                placeholder="Email"
                required
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div>
              <input
                className="input1"
                value={password}
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <div>
              <input
                className="input1"
                value={confirmPassword}
                type="password"
                placeholder="Confirm password"
                required
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
            </div>

            <div>
              <input
                className="input1"
                value={phone}
                type="text"
                placeholder="Phone"
                required
                onChange={(e) => setphone(e.target.value)}
              />
            </div>

            <button type="submit" className="button">
              Register
            </button>

            <span>
              Already have an account? <Link to="/Login"> Login</Link>
            </span>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Signup;
