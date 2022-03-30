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

    const numberOfPages = Math.ceil(pokemons.length / 16);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ currentList, setCurrentList ] = useState(0);

    const pagesNumber = [];
    for( let i = 1; i <= numberOfPages; i++) {
        pagesNumber.push(i);
    }

    const nextPage = () => {
        if( currentPage <= numberOfPages )
            setCurrentList(currentList + 16);
            setCurrentPage( currentPage + 1);
    }

    const previousPage = () => {
        if( currentList > 1 ) 
            setCurrentList( currentList - 16);
            setCurrentPage( currentPage - 1);
    }

    const pokemonsPageResults = () => {
        return pokemons?.slice(currentList, currentList + 16);
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

    return (
        <div>
            <div className="pokedex-top">
                <img src={pokemon} className='pokedex-image'/>
                <p className='intro-message'>Welcome <strong>{userName}</strong>, let's get the stats of your favorite Pokemon</p>
                <div className="search-container">
                    <div className='content-select'>
                        <select onChange={handleType}>
                            <option className='option1'>Buscar pokemon por tipo</option>
                            {
                                types.map(type => (
                                    <option key={type.name} value={type.url}>{type.name}</option>
                                ))
                            }
                        </select>
                        <i></i>
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
            <div className="pages-buttons">
                <div className='button-container'>
                    {   
                        currentPage > 1 && 
                        <button className='page-button' onClick={previousPage}>Previous</button> 
                    }

                    <h2>Pagina {currentPage}/{numberOfPages}</h2>
                    
                    { 
                        currentPage < numberOfPages && 
                        <button className='page-button' onClick={nextPage}>Next</button> 
                    }          
                </div>
                <h2 className='pages-title'>Busqueda por pagina</h2>
                <div className="pagination-container">
                    {
                        pagesNumber.map(page => (
                            <button 
                                className='button-list'
                                onClick={() => {
                                    setCurrentList((page - 1) * 16);
                                    setCurrentPage(page);
                                }}
                                key={page}
                            >{page}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Pokedex;