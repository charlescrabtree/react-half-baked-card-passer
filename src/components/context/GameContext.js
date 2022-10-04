import React from 'react';
import { useContext } from 'react';
import { createContext, useState } from 'react';
import initialCards from '../card-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {

  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);

  return <GameContext.Provider value={{
    deck,
    setDeck,
    selectedCard,
    setSelectedCard,
    from,
    setFrom,
    to,
    setTo,
    playerOneHand, setPlayerOneHand,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand
  }}>
    {children}
  </GameContext.Provider>;
};

const useGame = () => {
  const context = useContext(GameContext);
  return context;
};

export { GameProvider, useGame };