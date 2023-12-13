import { isWindowAvailable } from './isWindowAvailable';

export const isSSR = () => !isWindowAvailable();
