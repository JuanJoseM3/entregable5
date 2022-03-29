import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {

    const [ userName, setUserName ] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        dispatch({ 
            type: "GET_USERNAME",
            payload: userName 
        })
        setUserName("");
        navigate('/pokemons');
    }

    return (
        <div className="gameboy-container">
            <div className='hero'>
                <form className="hero-container" onSubmit={submit}>
                    <h4 className='welcome-message'>Hello player, type your name to find your favorite pokemon</h4>
                    <input 
                        type="text"
                        className='user-input' 
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                        required
                    />
                    <button className='continue-button'>SUBMIT</button>
                    <button 
                        className='cancel-button' 
                        type='button'
                        onClick={() => setUserName('')}
                    >CANCEL</button>
                </form>
            </div>
        </div>    
    );
};

export default Login;