import React from 'react';

const Moves = ({pokemon}) => {
    const moves = [];

    for( let i = 0; i < pokemon?.moves?.length; i++) {
        pokemon.moves.map(move => (
            moves.push(move.move.name)
        ))
    }

    return (
        <div className='moves'>
            <h2>Movements</h2>
            <div className="moves-container">
                <ul className='left-column'>
                    {
                        moves.slice(0,20).map(move => (
                            <li key={move}>{move}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Moves;