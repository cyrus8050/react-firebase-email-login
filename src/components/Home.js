import React from 'react'
import { auth } from '../firebase'

const Home = () => {
    return (
        <div>
            <h1>Welcome home</h1>
            <p><button onClick={() => auth.signOut()}>Sign out</button></p>
        </div>
    )
}

export default Home
