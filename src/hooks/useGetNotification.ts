import { useDispatch, useSelector } from 'redux/DappProviderContext';
import { notificationModalSelector } from 'redux/selectors';
import { clearNotificationModal } from 'redux/slices';

export function useGetNotification() {
  const notification = useSelector(notificationModalSelector);
  const dispatch = useDispatch();
  const clearNotification = () => dispatch(clearNotificationModal());
  return { notification, clearNotification };
}
