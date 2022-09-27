import React, { useEffect, useRef } from 'react';
import { faExchange } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { EventType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { Trim } from 'UI/Trim';
import {
  getEventListDataHexValue,
  getEventListHighlight
} from 'utils/transactions/transactionInfoHelpers';
import { getEventListInitialDecodeMethod } from 'utils/transactions/transactionInfoHelpers/getEventListInitialDecodeMethod';
import { DataDecode } from '../DataDecode';

import globalStyles from 'assets/sass/main.scss';

interface EventTopicsPropsTypes {
  topics: EventType['topics'];
  identifier?: string;
}

interface EventsListPropsTypes {
  events: EventType[];
  id?: string;
}

const EventTopics = (props: EventTopicsPropsTypes) => {
  const { topics, identifier } = props;
  const mergedTopics = topics.filter((topic) => topic).join('\n');

  return <DataDecode value={mergedTopics} identifier={identifier} />;
};

export const EventsList = (props: EventsListPropsTypes) => {
  const { events, id } = props;
  const ref = useRef<HTMLDivElement>(null);

  const initialDecodeMethod = getEventListInitialDecodeMethod();

  useEffect(() => {
    if (ref.current && ref.current !== null) {
      window.scrollTo({
        top: ref.current.getBoundingClientRect().top - 70,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div
      className={classNames(
        globalStyles.dFlex,
        globalStyles.flexColumn,
        globalStyles.mt1
      )}
    >
      {events.map((event: EventType, i) => {
        const dataHexValue = getEventListDataHexValue(event);
        const highlightTx = getEventListHighlight(event, id);

        return (
          <div
            key={i}
            className={classNames(
              globalStyles.dFlex,
              globalStyles.borderLeft,
              globalStyles.borderBottom,
              globalStyles.ml3,
              globalStyles.py3
            )}
            {...(highlightTx ? { ref } : {})}
          >
            <div className={globalStyles.transactionIcon}>
              <FontAwesomeIcon icon={faExchange} />
            </div>

            <div>
              {event.address != null && (
                <div
                  className={classNames(
                    globalStyles.row,
                    globalStyles.dFlex,
                    globalStyles.flexColumn,
                    globalStyles.flexSmRow,
                    globalStyles.mb3
                  )}
                >
                  <div className={globalStyles.colSm2}>Address</div>

                  <div
                    className={classNames(
                      globalStyles.colSm10,
                      globalStyles.dFlex,
                      globalStyles.flexColumn
                    )}
                  >
                    <Trim text={event.address} />

                    <CopyButton
                      text={event.address}
                      className={globalStyles.ml2}
                    />
                  </div>
                </div>
              )}

              {event.identifier != null && (
                <div
                  className={classNames(
                    globalStyles.row,
                    globalStyles.dFlex,
                    globalStyles.flexColumn,
                    globalStyles.flexSmRow,
                    globalStyles.mb3
                  )}
                >
                  <div className={globalStyles.colSm2}>Identifier</div>

                  <div
                    className={classNames(
                      globalStyles.colSm2,
                      globalStyles.dFlex,
                      globalStyles.alignItemsCenter
                    )}
                  >
                    {event.identifier}
                  </div>
                </div>
              )}

              {event.topics != null && event.topics.length > 0 && (
                <div
                  className={classNames(
                    globalStyles.row,
                    globalStyles.dFlex,
                    globalStyles.flexColumn,
                    globalStyles.flexSmRow,
                    globalStyles.mb3
                  )}
                >
                  <div className={globalStyles.colSm2}>Topics</div>

                  <div
                    className={classNames(
                      globalStyles.colSm10,
                      globalStyles.dFlex,
                      globalStyles.flexColumn
                    )}
                  >
                    <EventTopics
                      topics={event.topics}
                      identifier={event.identifier}
                    />
                  </div>
                </div>
              )}

              {event.data != null && (
                <div
                  className={classNames(
                    globalStyles.row,
                    globalStyles.dFlex,
                    globalStyles.flexColumn,
                    globalStyles.flexSmRow,
                    globalStyles.mb3
                  )}
                >
                  <div className={globalStyles.colSm2}>Data</div>

                  <div
                    className={classNames(
                      globalStyles.colSm10,
                      globalStyles.dFlex,
                      globalStyles.flexColumn
                    )}
                  >
                    <DataDecode
                      value={dataHexValue}
                      {...(highlightTx ? { initialDecodeMethod } : {})}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
