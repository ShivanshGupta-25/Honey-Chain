// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (userData) => {
//     setUser(userData);
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("honeychain_user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);

    localStorage.setItem(
      "honeychain_user",
      JSON.stringify(userData)
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("honeychain_user");
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "honeychain_user",
        JSON.stringify(user)
      );
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};