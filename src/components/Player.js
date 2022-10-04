import React, { useContext } from 'react';
import CardList from './CardList';
import { GameContext } from './context/GameContext';

export default function Player({
  player,
  hand,
}) {
  const { selectedCard, setSelectedCard } = useContext(GameContext);
  const { setFrom } = useContext(GameContext);
  const { to, setTo } = useContext(GameContext);
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
}
