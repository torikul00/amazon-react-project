import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import auth from "../firebase.init"


const useFirebase = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
 

    const googleProvider = new GoogleAuthProvider(auth)
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                navigate('/')
                toast.success('Sign Up Successful')
            })
            .catch(err => setError(err))
    }
   

    return {
        signInWithGoogle,
        user,
        error,
        
    }
}


export default useFirebase;