import React from "react";

export const Score: React.FC<{ correct: number; incorrect: number }> = ({
  correct,
  incorrect,
}) => (
  <div>
    <div>Correct: {correct}</div>
    <div>Incorrect: {incorrect}</div>
  </div>
);
