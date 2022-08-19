import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { GameTile } from "./GameTile";

const GameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
`;

export const GameMatrix: React.FC<{
  rows: number;
  columns: number;
}> = ({ rows, columns }) => {
  const gameMatrix = [
    "A",
    "B",
    "C",
    "D",
    "I",
    "A",
    "B",
    "C",
    "D",
    "I",
    "E",
    "F",
    "G",
    "H",
    "J",
    "E",
    "F",
    "G",
    "H",
    "J",
  ];

  const [isHidden, setHiddenState] = useState(new Map<number, boolean>());
  const [ firstIndex, setFirstIndex ] = useState<string>();


  const onTileClick = useCallback(
    (e: React.SyntheticEvent, cellIndex: number) => {
      e.preventDefault();

      const card = gameMatrix[cellIndex]
      let isMatchCards = false;
      
      const newState = new Map(isHidden);
      newState.set(cellIndex, !isHidden.get(cellIndex));
      setHiddenState(newState);

      if (!firstIndex) {
        setFirstIndex(card)
      } else {
        isMatchCards = isCardMatch(firstIndex, card)
      }

      if(!isMatchCards) {
        console.log('isHidden', isHidden)
        newState.set(cellIndex, false);
        newState.set(cellIndex, false);
        setHiddenState(newState);
      }

    },
    [isHidden, setHiddenState]
  );

  const isCardMatch = (firstIndex: string = '', secondIndex: string = '') => {
    //compare the array with the index no witth the value
    return firstIndex === secondIndex && gameMatrix.includes(firstIndex) && gameMatrix.includes(secondIndex);
  }

  return (
    <>
      <GameWrapper>
        {gameMatrix.map((cell, cellIndex) => (
          <GameTile
            key={cellIndex}
            hidden={!isHidden.get(cellIndex)}
            onClick={(e) => onTileClick(e, cellIndex)}
          >
            {cell}
          </GameTile>
        ))}
      </GameWrapper>
    </>
  );
};
