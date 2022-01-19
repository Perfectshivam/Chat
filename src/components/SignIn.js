import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase'
import Button from '@mui/material/Button';



function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return(
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    )
}
export default SignIn;
