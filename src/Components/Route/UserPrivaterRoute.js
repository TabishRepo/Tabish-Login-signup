import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext/Auth";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/UserPrivateRouteStyles.css";
import axios from "axios";
export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("http://localhost:5000/api/user-auth", {
        headers: {
          Authorization: auth?.token,
        },
      });
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? (
    <Outlet /> // it will render child route (userprofilesdata) other wise shows can not access
  ) : (
    <div>
      <h1 className="heading">
        Can not access without Authentication <br></br> <br></br>
        <Link to="/Login">
          <button className="back-button">Back to Login </button>
        </Link>
      </h1>{" "}
    </div>
  );
}
