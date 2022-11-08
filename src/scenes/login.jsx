import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"

const firebaseConfig = {
      apiKey: "AIzaSyAXgiYz-K32Zkn1oXjsVjr8fMuUmzEZrck",
      authDomain: "fir-auth-aff.firebaseapp.com",
      projectId: "fir-auth-aff",
      storageBucket: "fir-auth-aff.appspot.com",
      messagingSenderId: "170909949080",
      appId: "1:170909949080:web:937032b1080c75b9e3c4ed"
    };

export default function Login({ setUser }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig)//connects us to Firebase
        const auth = getAuth(app)//connects us to Firebase Auth
        const response = 
            await signInWithEmailAndPassword(auth, email, password)//sign us in
            .catch(alert);
        setUser(response.user)
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:{' '}
                    <input type="email" name="email"
                    value={email} onChange={e => setEmail(e.target.value)}

                        placeholder="yourname@domain.com" />

                </label><br />
                <label htmlFor="password">Password:{' '}
                    <input type="password" name="password"
                    value={password} onChange={e => setPassword(e.target.value)}
                 placeholder="........." />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}