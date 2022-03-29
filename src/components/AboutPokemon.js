import React, { useState } from 'react';

const AboutPokemon = ({ pokemon }) => {
    
    const pokemonAbilities = [];

    for( let i = 0; i < pokemon?.abilities?.length - 1; i++) {
        pokemon.abilities.map(ability => (
            pokemonAbilities.push(ability.ability.name)
        ))
    }

    return (
        <div>
            <ul>
                <li><strong>Height </strong>{pokemon.height * 10} cm</li>
                <li><strong>Weight </strong>{pokemon.weight / 10} kg</li>
                <li></li>
                <li><strong>Abilities </strong>{pokemonAbilities.map(ability => <p key={ability}>{ability}</p>)}</li>
            </ul>
        </div>
    );
};

export default AboutPokemon;