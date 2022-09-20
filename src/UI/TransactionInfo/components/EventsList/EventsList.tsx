import React from 'react';
import { faExchange } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EventType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { Trim } from 'UI/Trim';
import {
  getEventListDataHexValue,
  getEventListHighlight
} from 'utils/transactions/transactionInfoHelpers';
import { getEventListInitialDecodeMethod } from 'utils/transactions/transactionInfoHelpers/getEventListInitialDecodeMethod';
import { DataDecode } from '../DataDecode';

const EventTopics = ({
  topics,
  identifier
}: {
  topics: EventType['topics'];
  identifier?: string;
}) => {
  const mergedTopics = topics.filter((topic) => topic).join('\n');

  return <DataDecode value={mergedTopics} identifier={identifier} />;
};

export const EventsList = ({
  events,
  id
}: {
  events: EventType[];
  id?: string;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const initialDecodeMethod = getEventListInitialDecodeMethod();

  React.useEffect(() => {
    if (ref.current && ref.current !== null) {
      window.scrollTo({
        top: ref.current.getBoundingClientRect().top - 70,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className='events-list detailed-list d-flex flex-column mt-1'>
      {events.map((event: EventType, i) => {
        const dataHexValue = getEventListDataHexValue(event);
        const highlightTx = getEventListHighlight(event, id);

        return (
          <div
            key={i}
            className={`detailed-item d-flex border-left border-bottom ml-3 py-3 ${
              highlightTx ? 'highlighted' : ''
            }`}
            {...(highlightTx ? { ref } : {})}
          >
            <div className='transaction-icon'>
              <FontAwesomeIcon icon={faExchange} />
            </div>

            <div className='detailed-item-content'>
              {event.address != null && (
                <div className='row mb-3 d-flex flex-column flex-sm-row'>
                  <div className='col-sm-2 col-left'>Address</div>
                  <div className='col-sm-10 d-flex align-items-center'>
                    <Trim text={event.address} />
                    <CopyButton
                      text={event.address}
                      className='side-action ml-2'
                    />
                  </div>
                </div>
              )}

              {event.identifier != null && (
                <div className='row mb-3 d-flex flex-column flex-sm-row'>
                  <div className='col-sm-2 col-left'>Identifier</div>
                  <div className='col-sm-10 d-flex align-items-center'>
                    {event.identifier}
                  </div>
                </div>
              )}

              {event.topics != null && event.topics.length > 0 && (
                <div className='row mb-3 d-flex flex-column flex-sm-row'>
                  <div className='col-sm-2 col-left'>Topics</div>
                  <div className='col-sm-10 d-flex flex-column'>
                    <EventTopics
                      topics={event.topics}
                      identifier={event.identifier}
                    />
                  </div>
                </div>
              )}

              {event.data != null && (
                <div className='row mb-3 d-flex flex-column flex-sm-row'>
                  <div className='col-sm-2 col-left'>Data</div>
                  <div className='col-sm-10 d-flex flex-column'>
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
