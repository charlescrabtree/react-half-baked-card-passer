import React from 'react';
import { useContext } from 'react';
import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [to, setTo] = useState(1);
  return <GameContext.Provider value={{
    selectedCard,
    setSelectedCard,
    to,
    setTo
  }}>
    {children}
  </GameContext.Provider>;
};

// const useGame = () => {
//   const context = useContext(GameContext);
//   if (context === undefined) {
//     throw new Error('whoops, useGame must be contained within GameProvider');
//   }
//   return context;
// };

export { GameProvider, GameContext };