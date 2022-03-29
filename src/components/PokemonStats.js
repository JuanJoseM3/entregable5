import React from 'react';

const PokemonStats = ({pokemon}) => {
    return (
        <div>
            <h2>Pokemon Stats</h2>
            <ul>
                <li><strong>Attack </strong>{pokemon.stats?.[1].base_stat}</li>
                <li><strong>Defense </strong>{pokemon.stats?.[2].base_stat}</li>
                <li><strong>Speed </strong>{pokemon.stats?.[5].base_stat}</li>
                <li><strong>HP </strong>{pokemon.stats?.[0].base_stat}</li>
                <li><strong>Special attack </strong>{pokemon.stats?.[3].base_stat}</li>
                <li><strong>Special defense </strong>{pokemon.stats?.[4].base_stat}</li>
            </ul>
        </div>
    );
};

export default PokemonStats;