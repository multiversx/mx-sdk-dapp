import * as linkify from 'linkifyjs';

const protocolRegex = /^((file:\/\/\/)|(https?:|ftps?:)\/\/|(mailto:))/i;

const hasProtocol = (input: string) => protocolRegex.test(input);

export const getProtocol = (input: string): string => {
  if (hasProtocol(input)) return '';

  return linkify.find(input).some((link) => link.type === 'email')
    ? 'mailto:'
    : 'http://';
};

export const truncateText = (input: string, maxLength: number): string => {
  if (process.env.NODE_ENV !== 'production') {
    if (maxLength <= 0) {
      throw new Error('⚓️ maxLength should be positive number');
    }
  }

  return input.length > maxLength ? input.substring(0, maxLength) + '…' : input;
};
