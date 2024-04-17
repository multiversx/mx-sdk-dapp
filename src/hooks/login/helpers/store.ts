export interface RootState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export const definition = (
  set: (
    partial:
      | RootState
      | Partial<RootState>
      | ((state: RootState) => RootState | Partial<RootState>),
    replace?: boolean | undefined
  ) => void
): RootState => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 }))
});
