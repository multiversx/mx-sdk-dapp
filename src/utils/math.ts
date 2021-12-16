export const logarithmicRest = (position: number) => {
  const minp = 0;
  const maxp = 10;

  const minv = Math.log(0.005);
  const maxv = Math.log(2);

  const scale = (maxv - minv) / (maxp - minp);

  return Math.exp(minv + scale * (position - minp));
};
