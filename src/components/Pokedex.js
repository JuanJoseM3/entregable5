import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import pokemon from '../images/pokemon.png'
import pokeball from '../images/pokeball.png'
import '../styles/pokedex.css';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const navigate = useNavigate();

    const [ pokemons, setPokemons ] = useState([]);
    const [ types, setTypes ] = useState([]);
    const [ pokemonName, setPokemonName ] = useState("");

    const numberOfPages = Math.ceil(pokemons.length / 15);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ currentList, setCurrentList ] = useState(0);

    const nextPage = () => {
        if( currentPage <= numberOfPages )
            setCurrentList(currentList + 15);
            setCurrentPage( currentPage + 1);
    }

    const previousPage = () => {
        if( currentList > 1 ) 
            setCurrentList( currentList - 15);
            setCurrentPage( currentPage - 1);
    }

    const pokemonsPageResults = () => {
        return pokemons?.slice(currentList, currentList + 15);
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1125')
            .then(res => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => setTypes(res.data.results))
    }, []);

    const submit = e => {
        e.preventDefault();

        navigate(`/pokemons/${pokemonName}`);
    }

    const handleType = e => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }

    console.log(pokemons)

    return (
        <div>
            <img src={pokemon} className='pokedex-image'/>
            <p className='intro-message'>Welcome <strong>{userName}</strong>, let's get the stats of your favorite Pokemon</p>
            <div className="search-container">
                <div className='select-container'>
                    <select onChange={handleType}>
                        {
                            types.map(type => (
                                <option key={type.name} value={type.url}>{type.name}</option>
                            ))
                        }
                    </select>
                </div>
                <form onSubmit={submit} className='input-container'>
                    <label htmlFor="search">Search</label>
                    <input 
                        type="text"
                        id='search' 
                        onChange={e => setPokemonName(e.target.value)}
                        value={pokemonName}
                    />
                    <button><img src={pokeball} className='pokeball-image'/></button>
                </form>
            </div>
            <div className='button-container'>
                {   
                    currentPage > 1 && 
                    <button className='page-button' onClick={previousPage}>Previous</button> 
                }
                { 
                    currentPage < numberOfPages && 
                    <button className='page-button' onClick={nextPage}>Next</button> 
                }             
            </div>
            <ul className='pokemon-list'>
                {
                    pokemonsPageResults().map(pokemon => (
                        <PokemonCard 
                            pokemonURL={pokemon.pokemon?.url ? pokemon.pokemon.url : pokemon.url}
                            key={pokemon.pokemon?.url ? pokemon.pokemon.url : pokemon.url}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokedex;