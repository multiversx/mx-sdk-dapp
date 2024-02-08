import { addCustomToast, removeCustomToast } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { CustomToastType } from '../../types/toasts.types';

/**
 * React components cannot be sent trough Custom Events nor trough Redux
 * So a local dictionary is created here for registerd components
 */
const componentsDictionary: Record<string, () => JSX.Element> = {};
/**
 * Callbacks cannot be sent trough Custom Events nor trough Redux
 * So a local dictionary is created here for registered callbacks
 */
const componentsCloseHandlersDictionary: Record<string, () => void> = {};

export const getRegisteredCustomIconComponents = (id: string) =>
  componentsDictionary[id];

export const getRegisteredToastCloseHandler = (id: string) =>
  componentsCloseHandlersDictionary[id];

export const addNewCustomToast = (props: CustomToastType) => {
  if (props.component != null) {
    const { component, onClose, ...rest } = props;
    const data = store.dispatch(
      addCustomToast({
        ...rest,
        // do not send component to Redux
        component: null,
        onClose: undefined
      })
    );

    componentsDictionary[data?.payload.toastId] = component;
    if (onClose) {
      componentsCloseHandlersDictionary[data?.payload.toastId] = onClose;
    }

    return data?.payload;
  }
  return store.dispatch(addCustomToast(props)).payload;
};

export const deleteCustomToast = (toastId: string) =>
  store.dispatch(removeCustomToast(toastId));
