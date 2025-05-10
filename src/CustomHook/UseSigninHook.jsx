import React from "react";
import AxiosService from "../Common/AxiosService";

const UseSigninHook = () => {
  const [loading, setLoading] = React.useState(false);
  const [code, setCode] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const signin = async (eop, pass) => {
    try {
      setLoading(true);
      // Simulate an API call
      const response = await AxiosService.post("/api/auth/signin", {
        emailOrMobile: eop,
        password: pass,
      });
      setCode(response.data.code);
      console.log(response);
    } catch (error) {
      console.error("Error during sign-in:", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, code, signin };
};

export default UseSigninHook;
