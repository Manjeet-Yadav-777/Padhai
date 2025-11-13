import { createContext, useContext, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = async (data) => {
    try {
      const res = await api.post("/user/login", data);
      console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
        setUser(res.data.data.user);
        navigate(`/${res.data?.data?.user?.role}/dashboard`);
      } else {
        toast.error(res.data.message || "Login error");
      }
    } catch (error) {
      return toast.error(error.message || error);
    }
  };

  return (
    <UserContext.Provider value={{ login }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
