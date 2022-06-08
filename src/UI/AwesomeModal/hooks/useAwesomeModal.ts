import { useDispatch, useSelector } from '../../../redux/DappProviderContext';
import { awesomeModalVisibilitySelector } from '../../../redux/selectors/awesomeModalsSelectors';
import { setShowAwesomeModal } from '../../../redux/slices/awesomeModalsSlice';

const useAwesomeModal = () => {
  const dispatch = useDispatch();
  const visible = useSelector(awesomeModalVisibilitySelector);

  const toggle = (value?: boolean) => {
    dispatch(setShowAwesomeModal(value ?? !visible));
  };

  return { toggle, visible };
};

export default useAwesomeModal;
