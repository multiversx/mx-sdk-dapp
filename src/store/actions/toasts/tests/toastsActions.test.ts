import type {
  CustomToastType,
  ISimpleToast
} from 'store/slices/toast/toastSlice.types';
import {
  addCustomToast,
  addTransactionToast,
  createCustomToast,
  customToastCloseHandlersDictionary,
  customToastComponentDictionary,
  removeAllCustomToasts,
  removeAllTransactionToasts,
  removeCustomToast,
  removeTransactionToast
} from '../toastsActions';

const mockSetState = jest.fn();
const mockGetState = jest.fn();

jest.mock('store/store', () => ({
  getStore: () => ({
    setState: mockSetState,
    getState: mockGetState
  })
}));

const createRootState = () =>
  ({
    toasts: {
      customToasts: [],
      transactionToasts: []
    }
  }) as any;

const createSimpleToastPayload = (
  overrides: Partial<ISimpleToast> = {}
): ISimpleToast => ({
  toastId: overrides.toastId ?? 'toast-id',
  message: overrides.message ?? 'msg',
  title: overrides.title ?? 'title',
  icon: overrides.icon ?? 'icon',
  iconClassName: overrides.iconClassName ?? '',
  duration: overrides.duration ?? 1000,
  hasCloseButton: overrides.hasCloseButton,
  onClose: overrides.onClose,
  subtitle: overrides.subtitle
});
describe('toastsActions', () => {
  let rootState: ReturnType<typeof createRootState>;

  beforeEach(() => {
    rootState = createRootState();
    mockSetState.mockImplementation(
      (updater: (state: typeof rootState) => void) => updater(rootState)
    );
    mockGetState.mockReturnValue(rootState);
    customToastComponentDictionary['existing'] = jest.fn() as any;
    customToastCloseHandlersDictionary['existing'] = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
    Object.keys(customToastComponentDictionary).forEach(
      (key) => delete customToastComponentDictionary[key]
    );
    Object.keys(customToastCloseHandlersDictionary).forEach(
      (key) => delete customToastCloseHandlersDictionary[key]
    );
  });

  it('adds and updates custom toasts', () => {
    addCustomToast(createSimpleToastPayload({ toastId: 'toast-1' }));
    expect(rootState.toasts.customToasts).toHaveLength(1);
    const storedToastId = rootState.toasts.customToasts[0].toastId;

    addCustomToast(
      createSimpleToastPayload({ title: 'updated' }),
      storedToastId
    );
    expect(rootState.toasts.customToasts[0].title).toBe('updated');
  });

  it('removes custom toasts and all custom toasts', () => {
    addCustomToast(createSimpleToastPayload({ toastId: 'toast-1' }));
    const storedToastId = rootState.toasts.customToasts[0].toastId;
    removeCustomToast(storedToastId);
    expect(rootState.toasts.customToasts).toHaveLength(0);

    addCustomToast(createSimpleToastPayload({ toastId: 'toast-2' }));
    addCustomToast(createSimpleToastPayload({ toastId: 'toast-3' }));
    removeAllCustomToasts();
    expect(rootState.toasts.customToasts).toHaveLength(0);
  });

  it('manages transaction toasts', () => {
    const toastId = addTransactionToast({
      toastId: 'transaction-toast-1',
      totalDuration: 5000
    });
    expect(rootState.toasts.transactionToasts).toHaveLength(1);
    expect(toastId).toBe('transaction-toast-1');

    removeTransactionToast(toastId);
    expect(rootState.toasts.transactionToasts).toHaveLength(0);

    removeAllTransactionToasts();
    expect(rootState.toasts.transactionToasts).toHaveLength(0);
  });

  it('creates component toasts and registers handlers', () => {
    const instantiateToastElement = jest.fn();
    const onClose = jest.fn();
    const componentToast: CustomToastType = {
      toastId: 'component-toast',
      instantiateToastElement,
      onClose
    };
    const toastId = createCustomToast(componentToast);

    expect(toastId).toBe('component-toast');
    expect(customToastComponentDictionary[toastId]).toBe(
      instantiateToastElement
    );
    expect(customToastCloseHandlersDictionary[toastId]).toBe(onClose);
    expect(rootState.toasts.customToasts).toHaveLength(1);
  });
});
