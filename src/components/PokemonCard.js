import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pokemoncard.css';

const PokemonCard = ({ pokemonURL }) => {

    const [ pokemon, setPokemon ] = useState({});

    useEffect(() => {
        axios.get(pokemonURL)
            .then(res => setPokemon(res.data))
    }, [ pokemonURL ]);

    return (
        <li className='column'>
            <Link className='pokemon-card' to={`/pokemons/${pokemon.id}`} >
                <h2>{pokemon.name}</h2>
                <div className="left">
                    <ul>
                        <li><strong>Type: </strong>{pokemon.types?.[0].type.name}</li>
                        <li><strong>Attack: </strong>{pokemon.stats?.[1].base_stat}</li>
                        <li><strong>Defense: </strong>{pokemon.stats?.[2].base_stat}</li>
                        <li><strong>Speed: </strong>{pokemon.stats?.[5].base_stat}</li>
                        <li><strong>HP: </strong>{pokemon.stats?.[0].base_stat}</li>
                    </ul>
                    <img src={pokemon.sprites?.other["official-artwork"].front_default} className='pokemon-image'/>
                </div>
            </Link>
        </li>
    );
};

export default PokemonCard;