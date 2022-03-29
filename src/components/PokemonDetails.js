import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AboutPokemon from './AboutPokemon';
import Moves from './Moves';
import PokemonStats from './PokemonStats';

const PokemonDetails = () => {

    const { id } = useParams();
    const [ pokemon, setPokemon ] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [ id ]);

    console.log(pokemon);

    return (
        <div>
            <img src={pokemon.sprites?.other.dream_world.front_default} />
            <AboutPokemon pokemon={pokemon}/>
            <Moves pokemon={pokemon}/>
            <PokemonStats pokemon={pokemon}/>
        </div>
    );
};

export default PokemonDetails;