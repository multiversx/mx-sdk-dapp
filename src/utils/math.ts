/**
 * Decreases the remaining animation of the transaction toast progressively
 * @param positionPercent The toast animation position (%)
 */
export const progressiveDecrement = (positionPercent: number) => {
  return Math.exp(positionPercent / 100);
};
