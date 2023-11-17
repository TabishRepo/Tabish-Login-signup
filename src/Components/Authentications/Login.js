import React, { useState} from "react";
import axios from "axios";
import "../Styles/AuthenticationStyles.css";
import { useAuth } from "../AuthContext/Auth";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  //states for email,phone , name , password
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  //display data of user using Auth fron context API
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
 
  //submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));   //create locastorage to hold user credentiials
        navigate("/UserProfileData");
      } else {
        toast.error("Incorrect email or password");
      }
    } catch (error) {
      console.log(error);
      toast.error("Incorrect email or password");
    }
  };

  return (
    <div>
      <div>
     
      </div>
      <div class="get2">
        <div className="containerss">
          <h2>Login </h2>
          <form onSubmit={handleSubmit}>
            <div></div>

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
                class="input1"
                value={password}
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <button
            className="button"
              type="submit"
            >
              Login
            </button>
            <span>
              <Link to="/ForgotPassword"> Forgot Password?</Link>
            </span>

            <span>
              Don't have an account? <Link to="/Signup"> Sign up</Link>
            </span>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default Login;
