import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { notificationModalSelector } from 'reduxStore/selectors';
import { clearNotificationModal } from 'reduxStore/slices';

export function useGetNotification() {
  const notification = useSelector(notificationModalSelector);
  const dispatch = useDispatch();
  const clearNotification = () => dispatch(clearNotificationModal());
  return { notification, clearNotification };
}
