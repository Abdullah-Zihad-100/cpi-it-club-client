import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
     
       const unSubsribe= onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
          console.log("Current User---->", currentUser)
          setLoading(true)
        })
        return ()=>unSubsribe()
  },[])

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const createUser = (email, password, name) => {
    setLoading(false);
    console.log(name);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  const authInfo = {
    loginUser,
    createUser,
    updateUserProfile,
    logOut,
    user,
    loading
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
