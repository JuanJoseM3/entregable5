import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AboutPokemon from './AboutPokemon';
import Moves from './Moves';
import PokemonStats from './PokemonStats';
import '../styles/pokemondetail.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PokemonDetails = () => {

    const { id } = useParams();
    const [ pokemon, setPokemon ] = useState({});
    const background = useSelector(state => state.cardColor);
    const types = useSelector(state => state.types);
    const navigate = useNavigate();

    const [ component, setComponent ] = useState(<AboutPokemon />);
    const [ type, setType] = useState('about');

    useEffect(() => {
        switch (type) {
          case 'about':
            setComponent(<AboutPokemon pokemon={pokemon}/>);
            break;
          
          case 'stats':
            setComponent(<PokemonStats pokemon={pokemon}/>);
            break;
          
          default:
            setComponent(<Moves pokemon={pokemon}/>);
            break;
        }
      }, [type]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [ id ]);

    console.log(pokemon);

    const styles = {
        background
    }

    console.log(types)

    return (
        <div className="details-container">
            <div>
                <div className="header" style={styles}>
                    <button onClick={() => navigate(-1)} className='left-button'><i className="fa-solid fa-arrow-left arrow"></i></button>
                    <h2>Pokemon Information</h2>
                </div>
                
                <main className="main-info" style={styles}>
                    <div>
                        <h2>{pokemon.id >= 100 ? pokemon.id : (pokemon.id >= 10 ? ('0'+pokemon.id) : ('00' + pokemon.id))} 
                            <span> {pokemon.name}</span>
                        </h2>
                    </div>
                    <ul className="types-container">
                        {
                            types.map(type => (
                                <li key={type} className='type-item'>{type}</li>
                            ))
                        }
                    </ul>
                    
                    <img src={pokemon.sprites?.other.dream_world.front_default} className='pokemon-picture'/>
                    <div className="button-section">
                        <button className='info-button' onClick={() => setType('about')}>About</button>
                        <button className='info-button middle-button' onClick={() => setType('stats')}>Pokemon Stats</button>
                        <button className='info-button' onClick={() => setType('moves')}>Moves</button>
                    </div>
                    {component}
                </main>
            </div>
        </div>
    );
};

export default PokemonDetails;