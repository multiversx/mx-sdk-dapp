import React, { ReactNode, useEffect, useRef } from 'react';
import { faExchange } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { EventType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { Trim } from 'UI/Trim';
import {
  getEventListDataHexValue,
  getEventListHighlight
} from 'utils/transactions/transactionInfoHelpers';
import { getEventListInitialDecodeMethod } from 'utils/transactions/transactionInfoHelpers/getEventListInitialDecodeMethod';
import { DataDecode } from '../DataDecode';

export interface EventsListPropsType {
  events: EventType[];
  id?: string;
}

interface EventTopicsPropsType {
  topics: EventType['topics'];
  identifier?: string;
}

interface EventDataPropsType {
  children: ReactNode;
  label: string;
}

const EventTopics = ({ topics, identifier }: EventTopicsPropsType) => {
  const mergedTopics = topics.filter((topic) => topic).join('\n');

  return <DataDecode value={mergedTopics} identifier={identifier} />;
};

const EventData = ({
  label,
  children,
  globalStyles,
  styles
}: EventDataPropsType & WithStylesImportType) => (
  <div className={classNames(globalStyles?.row, styles?.row)}>
    <div className={classNames(globalStyles?.colSm2, styles?.label)}>
      {label}
    </div>

    <div className={classNames(globalStyles?.colSm10, styles?.data)}>
      {children}
    </div>
  </div>
);

const EventsListComponent = ({
  events,
  id,
  globalStyles,
  styles
}: EventsListPropsType & WithStylesImportType) => {
  const ref = useRef<HTMLDivElement>(null);

  const initialDecodeMethod = getEventListInitialDecodeMethod();

  useEffect(() => {
    if (ref.current && ref.current !== null) {
      window?.scrollTo({
        top: ref.current.getBoundingClientRect().top - 70,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className={styles?.events}>
      {events.map((event: EventType, index) => {
        const dataHexValue = getEventListDataHexValue(event);
        const highlightTx = getEventListHighlight(event, id);

        return (
          <div
            key={index}
            className={styles?.event}
            {...(highlightTx ? { ref } : {})}
          >
            <div className={styles?.icon}>
              <FontAwesomeIcon icon={faExchange} />
            </div>

            <div className={styles?.content}>
              {event.address != null && (
                <EventData
                  label='Hash'
                  globalStyles={globalStyles}
                  styles={styles}
                >
                  <Trim text={event.address} className={styles?.hash} />

                  <CopyButton text={event.address} className={styles?.copy} />
                </EventData>
              )}

              {event.identifier != null && (
                <EventData
                  label='Identifier'
                  globalStyles={globalStyles}
                  styles={styles}
                >
                  {event.identifier}
                </EventData>
              )}

              {event.topics != null && event.topics.length > 0 && (
                <EventData
                  label='Topics'
                  globalStyles={globalStyles}
                  styles={styles}
                >
                  <EventTopics
                    topics={event.topics}
                    identifier={event.identifier}
                  />
                </EventData>
              )}

              {event.data != null && (
                <EventData
                  label='Data'
                  globalStyles={globalStyles}
                  styles={styles}
                >
                  <DataDecode
                    value={dataHexValue}
                    {...(highlightTx ? { initialDecodeMethod } : {})}
                  />
                </EventData>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const EventsList = withStyles(EventsListComponent, {
  ssrStyles: () =>
    import('UI/TransactionInfo/components/EventsList/styles.scss'),
  clientStyles: () =>
    require('UI/TransactionInfo/components/EventsList/styles.scss').default
});
