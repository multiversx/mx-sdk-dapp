import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./pageState.module.css";

const PageState = ({
  icon,
  iconClass,
  iconBgClass,
  iconSize = "5x",
  title,
  description,
  action,
  dataTestId,
}: {
  icon?: IconProp;
  iconClass?: string;
  iconBgClass?: string;
  iconSize?: SizeProp;
  title?: string;
  description?: string | React.ReactNode;
  action?: React.ReactNode;
  dataTestId?: string;
}) => (
  <div className="state m-auto p-4 text-center" data-testid={dataTestId}>
    {icon && (
      <span
        className={`${styles.iconState} mx-auto ${
          iconBgClass ? iconBgClass : ""
        }`}
      >
        <FontAwesomeIcon
          icon={icon}
          className={iconClass ? iconClass : ""}
          size={iconSize}
        />
      </span>
    )}
    {title && <p className="h4 my-4">{title}</p>}
    {description && <div className="mb-3">{description}</div>}
    {action && <React.Fragment>{action}</React.Fragment>}
  </div>
);

export default PageState;
