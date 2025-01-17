type SafeWindowType<T extends Window = Window> = {
  [K in keyof T]?: T[K];
};

export const getIsExtensionAvailable = () => {
  const safeWindow =
    typeof window !== 'undefined' ? window : ({} as SafeWindowType);
  return (
    Boolean(safeWindow?.elrondWallet) || Boolean(safeWindow?.multiversxWallet)
  );
};
