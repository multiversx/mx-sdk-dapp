import { generateBatchTransactionsGrouping } from './generateBatchTransactionsGrouping'; // Replace 'your-module' with the actual module path

describe('generateBatchTransactionsGrouping', () => {
  it('should generate batch transactions grouping correctly', () => {
    const address =
      'erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv';
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
