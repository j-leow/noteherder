import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = () => {
    auth
    .signInWithPopup(githubProvider)
    // .then((data) => {
    // //   authHandler(data.user)
    // })
  }

  const authenticateGoogle = () => {
    auth
    .signInWithPopup(googleProvider)
  }

  return (
    <div className="signin">
      <button
        className="SignIn"
        onClick={authenticate}
      >
        Sign In With GitHub
      </button>

      <button
        className="SignIn"
        onClick={authenticateGoogle}
      >
        Sign In With Google
      </button>
    </div>
  )
}

export default SignIn
