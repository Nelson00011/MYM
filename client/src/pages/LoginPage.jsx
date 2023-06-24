import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    
    // const logIn =  async () => {
    //     try {
    //         await signInWithEmailAndPassword(getAuth(), email, password);
    //         navigate('/articles');
    //     } catch (event){
    //         setError(event.message);
    //     }
    // }
    
    
    return (
        <div>
        <h1>Log In</h1>
        {error && <p className="error">{error}</p>}
        
        <input placeholder="email address"
        value={email}
        onChange={(event)=> setEmail(event.target.value)}/>
        
        <input type="password"
        placeholder="password"
        value={password}
        onChange={(event)=> setPassword(event.target.value)}/>
        
        <button  style={{marginLeft:100}}>Log In</button>
        <br/>
        <Link to="/create-account" style={{marginLeft: 75}}>Create Account</Link>
        </div>
        );
}

export default LoginPage;