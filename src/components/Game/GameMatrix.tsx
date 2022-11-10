import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { GameTile } from "./GameTile";

const GameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  const [ firstIndex, setFirstIndex ] = useState<number>(-1);
  const [ secondIndex, setSecondtIndex ] = useState<number>(-1);

  const onTileClick = useCallback(
    (e: React.SyntheticEvent, cellIndex: number) => {
      e.preventDefault();
      let isMatchCards = false;
      
      const newState = new Map(isHidden);
      newState.set(cellIndex, !isHidden.get(cellIndex));
      setHiddenState(newState);

      if (firstIndex < 0) {
        setFirstIndex(cellIndex)
      } else if (secondIndex < 0) {
        setSecondtIndex(cellIndex);
      } else {
        isMatchCards = isMatch(firstIndex, secondIndex)
        newState.set(firstIndex, isMatchCards);
        newState.set(secondIndex, isMatchCards);
        setFirstIndex(cellIndex);
        setSecondtIndex(-1);
        setHiddenState(newState);
      }
    },
    [isHidden, setHiddenState]
  );

  const isMatch = (firstIndex: number, secondIndex: number): boolean => 
    gameMatrix[firstIndex] === gameMatrix[secondIndex];

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
