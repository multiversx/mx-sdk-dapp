import React, { useEffect, useMemo, useRef, ReactNode } from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { getUnixTimestampWithAddedSeconds } from 'utils/dateTime';
import {
  getRemainingValue,
  PROGRESS_INTERVAL_DURATION_MS
} from 'utils/progress/getRemainingValue';
import { storage } from 'utils/storage';
import { WithClassnameType } from '../types';

const TOAST_PROGRESS_KEY = 'toastProgress';

// TODO: Rename to "ProgressPropsType" when sdk-dapp@3.0.0
export interface ProgressProps extends WithClassnameType {
  id: string;
  done: boolean;
  children: ReactNode;
  expiresIn?: number;
  isCrossShard?: boolean;
  progress: {
    startTime: number;
    endTime: number;
  };
}

const ProgressComponent = ({
  id,
  children,
  progress,
  done,
  expiresIn = 10 * 60,
  className = 'dapp-progress',
  isCrossShard = false,
  styles
}: ProgressProps & WithStylesImportType) => {
  const { currentRemaining, totalSeconds } = useMemo(() => {
    const toastsProgress = storage.session.getItem(TOAST_PROGRESS_KEY) || {};
    const currentToastProgress = toastsProgress[id];
    const totalSeconds = progress ? progress.endTime - progress.startTime : 0;

    return { currentRemaining: currentToastProgress || 100, totalSeconds };
  }, []);

  const progressRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  const percentRemainingRef = useRef(currentRemaining);

  useEffect(() => {
    if (progress == null) {
      return;
    }

    if (done) {
      handleFinishedProgress();
    } else {
      handleRunningProgress();
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [progress, done]);

  function removeTxFromSession() {
    const toastProgress: Record<string, number> =
      storage.session.getItem(TOAST_PROGRESS_KEY);

    const hasSessionStoredTx = Boolean(toastProgress?.[id]);

    if (!hasSessionStoredTx) {
      return;
    }

    delete toastProgress[id];

    saveToSession(toastProgress);
  }

  function updateTxFromSession(value: number) {
    const toastProgress: Record<string, number> =
      storage.session.getItem(TOAST_PROGRESS_KEY) || {};

    toastProgress[id] = value;

    saveToSession(toastProgress);
  }

  function saveToSession(data: Record<string, number>) {
    storage.session.setItem({
      key: TOAST_PROGRESS_KEY,
      data: data,
      expires: getUnixTimestampWithAddedSeconds(expiresIn)
    });
  }

  function handleFinishedProgress() {
    if (percentRemainingRef.current < 100) {
      // Prevent setting the progress to finished state at rerender
      setPercentRemaining(0);

      return;
    }

    intervalRef.current = setInterval(() => {
      if (progressRef.current == null) {
        return;
      }

      const existing = percentRemainingRef.current;
      const value = existing - 1;

      if (value <= 0) {
        clearInterval(intervalRef.current);
        removeTxFromSession();
        setPercentRemaining(0);
      } else {
        updateTxFromSession(value);
        setPercentRemaining(value);
      }
    }, PROGRESS_INTERVAL_DURATION_MS);
  }

  function handleRunningProgress() {
    const toastProgress: Record<string, number> =
      storage.session.getItem(TOAST_PROGRESS_KEY) || {};
    const currentToast = toastProgress[id];

    if (currentToast === percentRemainingRef.current) {
      // Set the remaining value before starting the interval
      const value = getRemainingValue({
        remaining: percentRemainingRef.current,
        totalSeconds,
        isCrossShard
      });
      setPercentRemaining(value);
      updateTxFromSession(value);
    }

    intervalRef.current = setInterval(() => {
      if (progressRef.current == null) {
        return;
      }

      const value = getRemainingValue({
        remaining: percentRemainingRef.current,
        totalSeconds,
        isCrossShard
      });

      updateTxFromSession(value);
      setPercentRemaining(value);
    }, PROGRESS_INTERVAL_DURATION_MS);
  }

  function setPercentRemaining(value: number) {
    percentRemainingRef.current = value;
    updateProgressBar();
  }

  function updateProgressBar() {
    if (progressRef.current == null) {
      return;
    }

    const value = percentRemainingRef.current;

    progressRef.current.style.width = `${value}%`;
    progressRef.current.ariaValueNow = value;
  }

  return progress ? (
    <div className={classNames(styles?.progress, className)}>
      <div
        ref={progressRef}
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={100}
        className={styles?.bar}
      />
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};

export const Progress = withStyles(ProgressComponent, {
  ssrStyles: () => import('UI/Progress/progressStyles.scss'),
  clientStyles: () => require('UI/Progress/progressStyles.scss').default
});
