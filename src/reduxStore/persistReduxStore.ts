import { persistStore } from 'redux-persist';

export default function persistReduxStore(store: any) {
  return persistStore(store);
}
