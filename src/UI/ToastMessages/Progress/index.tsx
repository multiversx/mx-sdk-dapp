import * as React from "react";
import moment from "moment";
import { ToastType } from "types/toasts";
import {
  logarithmicRest,
  removeFromSession,
  saveToSession,
  getInitialData,
} from "./helpers";

const Progress = ({
  children,
  progress,
  done,
  id,
}: {
  id: string;
  done: boolean;
  children: React.ReactNode;
  progress: ToastType["progress"];
}) => {
  const ref = React.useRef(null);
  const intervalRef = React.useRef<any>();

  const { totalSeconds, currentRemaining } = getInitialData({ id, progress });

  const [percentRemaining, setPercentRemaining] =
    React.useState<number>(currentRemaining);

  React.useEffect(() => {
    if (progress) {
      const maxPercent = 90;
      const perc = totalSeconds / maxPercent;
      const int = moment.duration(perc.toFixed(2), "s").asMilliseconds();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, done]);

  return progress ? (
    <div className="progress position-relative" ref={ref}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${percentRemaining}%` }}
        aria-valuenow={percentRemaining}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="content-height">{children}</div>
      </div>
      <div className="d-flex position-absolute w-100">{children}</div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Progress;
