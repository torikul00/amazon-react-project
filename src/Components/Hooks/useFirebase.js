import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import auth from "../firebase.init"


const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const googleProvider = new GoogleAuthProvider(auth)
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch(err => setError(err))
    }
    const createNewUser = (email, passowrd) => {
        createUserWithEmailAndPassword(auth, email, passowrd)
        .then(result => setUser(result.user))
        .catch(err => setError(err))
    }
   


    return {
        signInWithGoogle,
        user,
        error,
        createNewUser
    }
}


export default useFirebase;