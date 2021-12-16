import * as React from 'react';
import moment from 'moment';
import { ToastType } from 'types/toasts';
import { logarithmicRest } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { toastsProgressSelector } from 'redux/selectors';
import { removeToastProgress, saveToastProgress } from 'redux/slices';

const Progress = ({
  children,
  progress,
  done,
  id
}: {
  id: string;
  done: boolean;
  children: React.ReactNode;
  progress: ToastType['progress'];
}) => {
  const ref = React.useRef(null);
  const intervalRef = React.useRef<any>();
  const dispatch = useDispatch();

  const toastProgress = useSelector(toastsProgressSelector);

  const removeFromSession = (id: string) => {
    if (toastProgress && id in toastProgress) {
      dispatch(removeToastProgress(id));
    }
  };

  const saveToSession = ({ id, value }: { id: string; value: number }) => {
    dispatch(
      saveToastProgress({
        id,
        expires: moment()
          .add(10, 'minutes')
          .unix(),
        data: toastProgress,
        progress: value
      })
    );
  };

  const getInitialData = ({
    progress,
    id
  }: {
    progress: ToastType['progress'];
    id: string;
  }) => {
    const totalSeconds = progress ? progress.endTime - progress.startTime : 0;
    const remaining = progress
      ? ((progress.endTime - moment().unix()) * 100) / totalSeconds
      : 0;

    const currentRemaining =
      toastProgress && id in toastProgress
        ? toastProgress[id].progress
        : remaining;
    return { currentRemaining, totalSeconds };
  };

  const { totalSeconds, currentRemaining } = getInitialData({ id, progress });

  const [percentRemaining, setPercentRemaining] = React.useState<number>(
    currentRemaining
  );

  React.useEffect(() => {
    if (progress) {
      const maxPercent = 90;
      const perc = totalSeconds / maxPercent;
      const int = moment.duration(perc.toFixed(2), 's').asMilliseconds();

      if (done) {
        intervalRef.current = setInterval(() => {
          if (ref.current !== null) {
            setPercentRemaining((existing) => {
              const value = existing - 1;
              if (value <= 0) {
                clearInterval(intervalRef.current);
                removeFromSession(id);
                return 0;
              } else {
                saveToSession({ id, value });
                return value;
              }
            });
          }
        }, 5);
      } else {
        intervalRef.current = setInterval(() => {
          if (ref.current !== null) {
            setPercentRemaining((existing) => {
              const decrement =
                existing > 100 - maxPercent ? 1 : logarithmicRest(existing);
              const value = existing - decrement;
              saveToSession({ id, value });
              return value;
            });
          }
        }, int);
      }

      return () => {
        clearInterval(intervalRef.current);
      };
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, done]);

  return progress ? (
    <div className='progress position-relative' ref={ref}>
      <div
        className='progress-bar'
        role='progressbar'
        style={{ width: `${percentRemaining}%` }}
        aria-valuenow={percentRemaining}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className='content-height'>{children}</div>
      </div>
      <div className='d-flex position-absolute w-100'>{children}</div>
    </div>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

export default Progress;
