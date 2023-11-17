import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/UserProfileStyles.css";
import { useAuth } from "../AuthContext/Auth";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const UserProfileData = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    localStorage.removeItem("auth");
  };

  const [userInfo, getuserInfo] = useState();
  // save id that comes from auth into variable
  const compare_id = auth?.user?._id;
  //get user data
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        const userdata = data.find((user) => user._id === compare_id);
        console.log(userdata);
        getuserInfo(userdata);
        console.log(getuserInfo);
      });
      // eslint-disable-next-line
  }, []);

  //edit profile functionality
  const [editProfile, seteditProfile] = useState(false);
  const [name,setname]= useState()
  const handleEditProfile = (id) => {
    seteditProfile(true);
    console.log(id);
  };


  const handleNameSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.put(`http://localhost:5000/api/users/${auth?.user?._id}`, { name });
    seteditProfile(false)
    toast.success("User name updated successfully")
    
    } catch (error) {
      console.error("Error updating user name:", error);
      toast.error("There is an error in updating user name")
    }
  };
  



 

  return (
    <div >
      <div className="h-9"></div>
      <div className="main-container">
        <div className="main">
          <div class="container">
            <div className="firstChild">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="/"
                class="rounded-circle p-5 bg-primary ml-12"
                width="200"
              ></img>
              <h1 class="mt-4 text-lg font-semibold">{userInfo?.name}</h1>
            </div>
            <div className="secondChild">
              <div className="w-full">
                <h1 class="mb-4 ml-2 text-md font-medium mt-8">
                  Name : {userInfo?.name}
                </h1>
                <h1 class="mb-4 ml-2 text-md font-medium">
                  Email Address : {userInfo?.email}
                </h1>
                <h1 class="mb-4 ml-2 text-md font-medium">
                  Phone no : {userInfo?.phone}
                </h1>

                <button
                  onClick={handleEditProfile}
                  class="bg-violet-500 text-white  py-2 px-8 rounded-md hover:bg-violet-900"
                >
                  <NavLink Link to="">
                    Edit
                  </NavLink>
                </button>
              </div>
              <div className="w-full flex items-end justify-end">
                <NavLink onClick={handleLogout} to="/login">
                  <button class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-900">
                    Logout
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* edit profile of users */}

        {editProfile && (
          <div class="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="flex flex-col items-center py-6 px-4 bg-white rounded-xl">
              <div>
                <p className="text-gray-600 font-medium tracking-wide">
                  Update user name
                </p>
                <form onSubmit={handleNameSubmit} >
                  <div>
                    <input
                      type="text"
                      value={name}
                      placeholder="Full Name "
                      required
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <button className=" py-1  bg-violet-500 rounded-md text-white">
                  Yes
                </button>

               

                </form>

              </div>
              <div className="flex justify-end gap-4 py-2 ">
              
              <button
                  onClick={() => seteditProfile(false)}
                  className="px-24 py-1 border-2 text-white  bg-red-500  rounded-md"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Toaster/>
    </div>
  );
};

export default UserProfileData;
