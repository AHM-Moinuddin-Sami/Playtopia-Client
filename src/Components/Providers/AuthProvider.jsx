import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthorizationContext = createContext();

const auth = getAuth(app);

console.log(auth);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        // setLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            if (loggedUser != null) {
                loggedUser.providerData.forEach(profile => {
                    console.log(profile.photoURL);
                });
            }
            setLoading(false);

        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        googleLogin,
        logIn,
        logOut,
        register,
        user,
        loading
    }

    return (
        <AuthorizationContext.Provider value={authInfo}>
            {children}
        </AuthorizationContext.Provider>
    );
};

export default AuthProvider;