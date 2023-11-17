import React, { useState} from "react";
import axios from "axios";
import "../Styles/AuthenticationStyles.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function ForgotPassword() {
  //states for email,phone , name , password
  const [email, setemail] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [phone, setphone] = useState("");

  
  

  const navigate = useNavigate();
  //submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      newpassword.length < 8 ||
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}/.test(newpassword)
    ) {
      toast.error(
        "Password must be at least 8 characters with one lowercase, one uppercase, one digit, and one special character"
      );
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/forgot-password",
        {
          email,
          newpassword,
          phone,
        }
      );
      if (res && res.data.success) {
        toast.success("Password Updated Successfully");

        navigate("/Login");
      } else {
        toast.error("Please enter correct email or Phone no");
      }
    } catch (error) {
      console.log(error);
      toast.error("Please enter correct email or Phone no");
    }
  };

  return (
    <div>
      <div class="get2">
        <div className="containerss">
          <h2>Reset Password </h2>
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
            <input
              class="input1"
              value={phone}
              type="text"
              placeholder="Enter your phone number"
              required
              onChange={(e) => setphone(e.target.value)}
            />

            <div>
              <input
                class="input1"
                value={newpassword}
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setnewpassword(e.target.value)}
              />
            </div>

            <button class="button" type="submit">
              Reset
            </button>

            <span>
              Already have an  account? <Link to="/Login"> Login</Link>
            </span>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
