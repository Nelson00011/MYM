import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] =useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    
    // const createAccount = async () => {
    //     try {
    //         if (password !== confirmPassword) {
    //             setError('Password and confirm password do not match');
    //             return;
    //         }
    //         await createUserWithEmailAndPassword(getAuth(), email, password);
    //         navigate('/articles');
    //     } catch (e) {
    //         setError(e.message);
    //     }
    // }
    
    return (
        <div>
        <h1>Create Account</h1>
        {error && <p className="error">{error}</p>}
        
        <input placeholder="email address"
        value={email}
        onChange={(event)=> setEmail(event.target.value)}/>
        
        <input type="password"
        placeholder="password"
        value={password}
        onChange={(event)=> setPassword(event.target.value)}/>
        
        <input type="password"
        placeholder="Re-enter your password"
        value={confirmPassword}
        onChange={(event)=> setConfirmPassword(event.target.value)}/>
        
        <button style={{marginLeft: 75}}>Create Account</button>
        <br/>
        <Link to="/login" style={{marginLeft:25}}>Already have an account? Log in</Link>
        </div>
        );
}

export default CreateAccountPage;