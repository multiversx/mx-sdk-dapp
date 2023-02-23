export const MAX_REST = 10;

export const logarithmicRest = (position: number, maxp = MAX_REST) => {
  const minp = 0;

  const minv = Math.log(0.005);
  const maxv = Math.log(5);

  const scale = (maxv - minv) / (maxp - minp);

  return Math.exp(minv + scale * (position - minp));
};
