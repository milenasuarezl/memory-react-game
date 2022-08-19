import React, { SyntheticEvent } from "react";
import styled from "styled-components";

const GameTileWraper = styled.div`
  font-size: 4rem;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const GameTile: React.FC<{
  hidden?: boolean;
  onClick?: (e: SyntheticEvent) => any;
}> = ({ hidden, children, onClick, ...rest }) => (
  <GameTileWraper onClick={onClick} {...rest}>
    {hidden ? "🤷🏽‍♂️" : children}
  </GameTileWraper>
);
