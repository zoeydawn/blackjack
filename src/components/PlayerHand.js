import React, { Component } from 'react';

const PlayerHand = props => {
  const { hand } = props;
  return (
    <div>
      <h4>Hand:</h4>
      <ul>
        {hand.map((card, i) => (
          <li key={i}>{card.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PlayerHand;
