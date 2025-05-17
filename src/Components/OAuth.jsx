import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Common/Firebase.js";
import UseOAuthAutentication from "../CustomHook/UseOAuthHook.jsx";
import "./OAuth.css";

const OAuth = ({ buttonText }) => {
  const { loading, OAuthAutentication } = UseOAuthAutentication();
  const handleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      let values = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        mobile: result?.user?.phoneNumber,
      };
     
      if (result) {
        await OAuthAutentication(values);
      }
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="flex col-md-3 text-center justify-center align-items-center">
        <button
          className="group m-2 border-2 border-gray-300 rounded-lg p-2 bg-gray-200 text-gray-700 hover:bg-gray-200 hover:text-blue-500 transition duration-300 ease-in-out flex items-center shadow-md auth-btn relative overflow-hidden"
          onClick={handleClick}
        >
          <span className="bg-white border-2 w-8 h-8 rounded-lg mr-2 shadow-lg flex justify-center items-center hover:shadow-xl transition duration-700 ml-2">
            <FcGoogle />
          </span>

          {/* Text appears slowly and with delay */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-1000 delay-300 group-hover:max-w-xs group-hover:ml-2">
            {buttonText}
          </span>
        </button>
      </div>
    </div>
  );
};

export default OAuth;
