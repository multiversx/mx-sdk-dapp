import React from 'react';
import './detailItem.scss';

export const DetailItem = ({
  children,
  title,
  className = '',
  colWidth = '2',
  noBorder = false
}: {
  children: React.ReactNode;
  title: string | React.ReactNode;
  className?: string;
  colWidth?: string;
  noBorder?: boolean;
}) => (
  <div
    className={`row detail-item ${className} ${
      noBorder ? 'pt-3 pb-1' : 'border-bottom py-3'
    }`}
  >
    <div
      className={`col-lg-${colWidth} text-secondary text-lg-right pl-lg-spacer`}
    >
      {title}
    </div>
    <div className={`col-lg-${12 - Number(colWidth)} pr-lg-spacer`}>
      {children}
    </div>
  </div>
);
