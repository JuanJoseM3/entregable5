import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
        <form onSubmit={submit}>
            <input 
                type="text" 
                onChange={e => setUserName(e.target.value)}
                value={userName}
                required
            />
            <button>Submit</button>
        </form>
    );
};

export default Login;