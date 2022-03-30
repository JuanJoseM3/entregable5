import React from 'react';

const PokemonStats = ({pokemon}) => {
    return (
        <div className='pokemon-stats'>
            <h2>Pokemon Stats</h2>
            <ul>
                <li>Attack {pokemon.stats?.[1].base_stat}</li>
                <li>Defense {pokemon.stats?.[2].base_stat}</li>
                <li>Speed {pokemon.stats?.[5].base_stat}</li>
                <li>HP {pokemon.stats?.[0].base_stat}</li>
                <li>Special attack {pokemon.stats?.[3].base_stat}</li>
                <li>Special defense {pokemon.stats?.[4].base_stat}</li>
            </ul>
        </div>
    );
};

export default PokemonStats;