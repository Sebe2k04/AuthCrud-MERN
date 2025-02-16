import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  return (
    <AuthContext.Provider value={{ user,setUser }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }else{
        return context;
    }
}


