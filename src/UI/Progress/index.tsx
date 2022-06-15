import React from 'react';
import moment from 'optionalPackages/moment';
import { logarithmicRest } from 'utils';
import storage from 'utils/storage';

export interface ProgressProps {
  id: string;
  done: boolean;
  children: React.ReactNode;
  expiresIn?: number;
  progress: {
    startTime: number;
    endTime: number;
  };
}

const Progress = ({
  id,
  children,
  progress,
  done,
  expiresIn = 10 * 60
}: ProgressProps) => {
  const ref = React.useRef(null);
  const intervalRef = React.useRef<any>();
  const removeTxFromSession = () => {
    const toastProgress = storage.session.getItem('toastProgress');
    const hasSessionStoredTx = Boolean(toastProgress?.[id]);

    if (!hasSessionStoredTx) {
      return;
    }

    const expires = moment().add(expiresIn, 'seconds').unix();

    delete toastProgress[id];

    storage.session.setItem({
      key: 'toastProgress',
      data: toastProgress,
      expires
    });
  };

  const saveToSession = ({ value }: { value: number }) => {
    const toastProgress = storage.session.getItem('toastProgress') || {};
    toastProgress[id] = value;
    storage.session.setItem({
      key: 'toastProgress',
      data: toastProgress,
      expires: moment().add(expiresIn, 'seconds').unix()
    });
  };

  const getInitialData = () => {
    const totalSeconds = progress ? progress.endTime - progress.startTime : 0;
    const toastProgress = storage.session.getItem('toastProgress');
    const remaining = progress
      ? ((progress.endTime - moment().unix()) * 100) / totalSeconds
      : 0;

    const currentRemaining =
      toastProgress && id in toastProgress ? toastProgress[id] : remaining;
    return { currentRemaining, totalSeconds };
  };

  const { totalSeconds, currentRemaining } = getInitialData();

  const [percentRemaining, setPercentRemaining] =
    React.useState<number>(currentRemaining);

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
                removeTxFromSession();
                return 0;
              } else {
                saveToSession({ value });
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
              saveToSession({ value });
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
