import React from 'react';
import typeColors from '../../helpers/typeColors'
import './style.css';

function Card(props) {
    const {
        sprites,
        name,
        types,
        weight,
        height,
        abilities
    } = props.pokemonProps
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {name}
            </div>
            <div className="Card__types">
                {
                    types.map((type, pos) => {
                        return (
                            <div className="Card__type" key={pos} style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{height}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
