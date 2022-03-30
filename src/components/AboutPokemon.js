import React from 'react';

const AboutPokemon = ({ pokemon }) => {
    
    const pokemonAbilities = [];

    for( let i = 0; i < pokemon?.abilities?.length - 1; i++) {
        pokemon.abilities.map(ability => (
            pokemonAbilities.push(ability.ability.name)
        ))
    }

    return (
        <div className='about-container'>
            <h2>Basic info</h2>
            <div className='info-container'>
                <ul className='pokemon-description'>
                    <li>Height {pokemon?.height * 10} cm</li>
                    <li>Weight {pokemon?.weight / 10} kg</li>
                </ul>
                
                <li></li>
                <li><strong>Abilities </strong>{pokemonAbilities.map(ability => <p key={ability}>{ability}</p>)}</li>
            </div>
        </div>
    );
};

export default AboutPokemon;