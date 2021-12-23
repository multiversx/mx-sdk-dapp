import { ToastType } from 'types/toasts';

export interface Props {
  id: string;
  done: boolean;
  children: React.ReactNode;
  progress: ToastType['progress'];
}
