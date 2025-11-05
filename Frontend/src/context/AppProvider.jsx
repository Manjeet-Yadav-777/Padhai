import { Children, createContext, useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const url = "http://localhost:3000/api";
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // User Authentication

  const login = async (email, password) => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${url}/user/login`,
        { email, password },
        { withCredentials: true }
      );

      if (res.data.success) {
        setUser(res.data.data.user);

        toast.success(res.data.message);
        localStorage.setItem("user", JSON.stringify(res.data.data.user)); // save

        navigate("/principal/dashboard");
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (err) {
      console.log(err.message || err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    const res = await axios.post(
      `${url}/user/logout`,
      {},
      {
        withCredentials: true,
      }
    );

    if (res.data.success) {
      toast.success(res.data.message);
      navigate("/");
    } else {
      toast.error(res.data.message);
    }
    console.log(res);
  };

  return (
    <AppContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
