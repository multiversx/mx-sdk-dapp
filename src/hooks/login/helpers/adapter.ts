import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { createSelectors } from './selectors';
import { RootState, definition } from './store';

const useStore = createSelectors(create<RootState>()(definition));

const usePersistStore = createSelectors(
  create<RootState>()(
    devtools(persist(definition, { name: 'persistRootStore' }))
  )
);

const useSessionStore = createSelectors(
  create<RootState>()(
    devtools(
      persist(definition, {
        name: 'sessionRootStore',
        storage: createJSONStorage(() => sessionStorage)
      })
    )
  )
);

export { useStore, usePersistStore, useSessionStore };
