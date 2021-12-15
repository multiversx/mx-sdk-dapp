import moment from "moment";
import storage from "storage";
import { ToastType } from "types/toasts";

export function logarithmicRest(position: number) {
  const minp = 0;
  const maxp = 10;

  const minv = Math.log(0.005);
  const maxv = Math.log(2);

  const scale = (maxv - minv) / (maxp - minp);

  return Math.exp(minv + scale * (position - minp));
}

export const removeFromSession = (id: string) => {
  const toastProgress = storage.session.getItem("toastProgress");
  if (toastProgress && id in toastProgress) {
    delete toastProgress[id];
    storage.session.setItem({
      key: "toastProgress",
      data: toastProgress,
      expires: moment().add(10, "minutes").unix(),
    });
  }
};

export const saveToSession = ({ id, value }: { id: string; value: number }) => {
  const toastProgress = storage.session.getItem("toastProgress") || {};
  toastProgress[id] = value;
  storage.session.setItem({
    key: "toastProgress",
    data: toastProgress,
    expires: moment().add(10, "minutes").unix(),
  });
};

export const getInitialData = ({
  progress,
  id,
}: {
  progress: ToastType["progress"];
  id: string;
}) => {
  const totalSeconds = progress ? progress.endTime - progress.startTime : 0;
  const toastProgress = storage.session.getItem("toastProgress");

  const remaining = progress
    ? ((progress.endTime - moment().unix()) * 100) / totalSeconds
    : 0;

  const currentRemaining =
    toastProgress && id in toastProgress ? toastProgress[id] : remaining;
  return { currentRemaining, totalSeconds };
};
