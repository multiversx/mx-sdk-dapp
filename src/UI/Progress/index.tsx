import React, { useEffect, useMemo, useRef, ReactNode } from 'react';
import classNames from 'classnames';
import { getUnixTimestampWithAddedSeconds } from 'utils/dateTime';
import { logarithmicRest } from 'utils/math';
import { storage } from 'utils/storage';

import { WithClassnameType } from '../types';
import styles from './progressStyles.scss';

const TOAST_PROGRESS_KEY = 'toastProgress';

export interface ProgressPropsType extends WithClassnameType {
  id: string;
  done: boolean;
  children: ReactNode;
  expiresIn?: number;
  progress: {
    startTime: number;
    endTime: number;
  };
}

export const Progress = ({
  id,
  children,
  progress,
  done,
  expiresIn = 10 * 60,
  className = 'dapp-progress'
}: ProgressPropsType) => {
  const initialData = useMemo(() => {
    const totalSeconds = progress ? progress.endTime - progress.startTime : 0;
    const toastProgress = storage.session.getItem(TOAST_PROGRESS_KEY);
    const unixNow = Math.floor(Date.now() / 1000);
    const remaining = progress
      ? ((progress.endTime - unixNow) * 100) / totalSeconds
      : 0;

    const currentRemaining =
      toastProgress && id in toastProgress ? toastProgress[id] : remaining;

    return { currentRemaining, totalSeconds };
  }, []);

  const { totalSeconds, currentRemaining } = initialData;

  const progressRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timer | undefined>();
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
    const toastProgress: Record<number, number> = storage.session.getItem(
      TOAST_PROGRESS_KEY
    );

    const hasSessionStoredTx = Boolean(toastProgress?.[id]);

    if (!hasSessionStoredTx) {
      return;
    }

    delete toastProgress[id];

    saveToSession(toastProgress);
  }

  function updateTxFromSession(value: number) {
    const toastProgress: Record<number, number> =
      storage.session.getItem(TOAST_PROGRESS_KEY) || {};

    toastProgress[id] = value;

    saveToSession(toastProgress);
  }

  function saveToSession(data: Record<number, number>) {
    storage.session.setItem({
      key: TOAST_PROGRESS_KEY,
      data: data,
      expires: getUnixTimestampWithAddedSeconds(expiresIn)
    });
  }

  function handleFinishedProgress() {
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
    }, 5);
  }

  function handleRunningProgress() {
    const maxPercent = 90;
    const perc = totalSeconds / maxPercent;
    const intMs = parseFloat(perc.toFixed(2)) * 1000;

    intervalRef.current = setInterval(() => {
      if (progressRef.current == null) {
        return;
      }

      const existing = percentRemainingRef.current;

      const decrement =
        existing > 100 - maxPercent ? 1 : logarithmicRest(existing);
      const value = existing - decrement;

      updateTxFromSession(value);
      setPercentRemaining(value);
    }, intMs);
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
    <div className={classNames(styles.progress, className)}>
      <div
        ref={progressRef}
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={100}
        className={styles.bar}
      />
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};
