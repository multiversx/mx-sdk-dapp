import { addCustomToast, removeCustomToast } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import {
  ComponentIconEventsEnum,
  CustomToastType
} from '../../types/toasts.types';

/**
 * React components cannot be sent trough Custom Events nor trough Redux
 * So a local dictionary is created here for registerd components
 */
const componentsDictionary: Record<string, () => JSX.Element> = {};

export const getRegisteredCustomIconComponents = (id: string) =>
  componentsDictionary[id];

export const addNewCustomToast = (props: CustomToastType) => {
  if (props.component != null) {
    const { component, ...rest } = props;
    const { payload } = store.dispatch(
      addCustomToast({
        ...rest,
        // do not send component to Redux
        component: null
      })
    );

    componentsDictionary[payload.toastId] = component;

    const event = new CustomEvent(ComponentIconEventsEnum.onMount, {
      detail: payload.toastId
    });
    document.dispatchEvent(event);

    return payload;
  }
  return store.dispatch(addCustomToast(props)).payload;
};

export const deleteCustomToast = (toastId: string) =>
  store.dispatch(removeCustomToast(toastId));
