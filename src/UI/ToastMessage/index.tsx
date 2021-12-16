import * as React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import IconState from "UI/IconState";
import { removeToast } from "redux/slices/toastsSlice";
import { ToastType } from "types/toasts";
import Progress from "UI/Progress";
import classNames from "classnames";

const ToastMessage = ({ toast }: { toast: ToastType }) => {
  const {
    id,
    icon,
    iconClassName,
    title,
    description,
    timestamp,
    expires,
    isUpdate,
    progress,
    onClick,
    hasCloseButton = true,
  } = toast;
  const [show, setShow] = React.useState(isUpdate);
  const [hasProgress, setHasProgress] = React.useState(progress);
  const ref = React.useRef(null);
  const dispatch = useDispatch();

  const delay =
    expires && timestamp != null
      ? parseInt(String(expires)) - (moment().valueOf() - timestamp)
      : 0;
  const props = {
    ...(expires ? { autohide: true } : {}),
    ...(expires ? { delay } : {}),
  };

  const onDeleteToast = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    deleteToast();
  };

  const deleteToast = () => {
    if (ref.current !== null) {
      setShow(false);
      setHasProgress(undefined);
      setTimeout(() => {
        dispatch(removeToast(id));
      }, 300);
    }
  };

  React.useEffect(() => {
    if (ref.current !== null) {
      if (!isUpdate) {
        const timer = setTimeout(() => {
          setShow(true);
        }, 300);
        return () => clearTimeout(timer);
      }
    }
    return;
  }, [isUpdate]);

  const toastClassNames = classNames({
    "toast-visible": show,
    clickable: onClick != null,
  });

  return (
    <Toast
      ref={ref}
      className={toastClassNames}
      key={timestamp}
      onClose={deleteToast}
      onClick={onClick}
      {...props}
    >
      <Progress progress={hasProgress} done={hasCloseButton} id={id}>
        <div className="w-100 media p-2">
          <div className="align-self-center ml-2 mr-2 pr-1">
            <IconState iconSize="2x" icon={icon} className={iconClassName} />
          </div>
          <div className="media-body flex-grow-1" style={{ minWidth: 0 }}>
            <div className="d-flex justify-content-between mb-1">
              <h5 className="m-0 font-weight-normal text-nowrap text-truncate">
                {title}
              </h5>

              {hasCloseButton && (
                <button
                  type="button"
                  className="close d-flex side-action align-items-center mx-2 outline-0"
                  onClick={onDeleteToast}
                >
                  <FontAwesomeIcon icon={faTimes} size="xs" />
                </button>
              )}
            </div>
            <div className="mb-0 text-break">{description}</div>
          </div>
        </div>
      </Progress>
    </Toast>
  );
};

export default ToastMessage;
