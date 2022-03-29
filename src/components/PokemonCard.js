import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pokemoncard.css';

const PokemonCard = ({ pokemonURL }) => {

    const [ pokemon, setPokemon ] = useState({});
    const [ background, setBackground ] = useState('#b89c7b')

    useEffect(() => {
        axios.get(pokemonURL)
            .then(res => {
                setPokemon(res.data)
                
                if(res.data.types[0].type.name === 'normal') setBackground('#b89c7b')
                else if(res.data.types[0].type.name === 'fighting') setBackground('#ec1919')
                else if(res.data.types[0].type.name === 'flying') setBackground('#b378db')
                else if(res.data.types[0].type.name === 'poison') setBackground('#ae0fdf')
                else if(res.data.types[0].type.name === 'ground') setBackground('#d1c666')
                else if(res.data.types[0].type.name === 'rock') setBackground('#b3a425')
                else if(res.data.types[0].type.name === 'bug') setBackground('#98b827')
                else if(res.data.types[0].type.name === 'ghost') setBackground('#8a0fd1')
                else if(res.data.types[0].type.name === 'steel') setBackground('#7e7272')
                else if(res.data.types[0].type.name === 'fire') setBackground('#e9640c')
                else if(res.data.types[0].type.name === 'water') setBackground('#457591')
                else if(res.data.types[0].type.name === 'grass') setBackground('#41e73b')
                else if(res.data.types[0].type.name === 'electric') setBackground('#f3de1d')
                else if(res.data.types[0].type.name === 'psychic') setBackground('#ec80da')
                else if(res.data.types[0].type.name === 'ice') setBackground('#79cac3')
                else if(res.data.types[0].type.name === 'dragon') setBackground('#512cda')
                else if(res.data.types[0].type.name === 'dark') setBackground('#524b0f')
                else if(res.data.types[0].type.name === 'fairy') setBackground('#f05ec4')
                else if(res.data.types[0].type.name === 'unknown') setBackground('#3a3037')
                else setBackground('#684a5f')
            })
    }, [ pokemonURL ]);

    const styles = {
        background
    }

    return (
        <li className='column'>
            <Link className='pokemon-card' to={`/pokemons/${pokemon.id}`} style={styles}>
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