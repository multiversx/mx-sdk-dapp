import { generateBatchTransactionsGrouping } from './generateBatchTransactionsGrouping'; // Replace 'your-module' with the actual module path

describe('generateBatchTransactionsGrouping', () => {
  it('should generate batch transactions grouping correctly', () => {
    const address =
      'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex';
    const transactions = [
      [
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '1'
        },
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '2'
        }
      ],
      [
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '3'
        }
      ],
      [
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '4'
        },
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '5'
        },
        {
          receiver: address,
          sender: address,
          value: '0',
          data: '6'
        }
      ]
    ];

    const expectedGrouping = [[0, 1], [2], [3, 4, 5]];

    const result = generateBatchTransactionsGrouping(transactions);

    expect(result).toEqual(expectedGrouping);
  });

  it('should handle empty input', () => {
    const transactions: any[][] = [];

    const result = generateBatchTransactionsGrouping(transactions);

    expect(result).toEqual([]);
  });

  it('should handle nested empty arrays', () => {
    const transactions = [[], [], []];

    const result = generateBatchTransactionsGrouping(transactions);

    expect(result).toEqual([[], [], []]);
  });
});
