import { pluralize } from '../pluralize';

describe('pluralize tests', () => {
  const str = 'item';

  it('pluralizes correctly when no items are present', () => {
    const count = 0;
    expect(pluralize(str, count)).toStrictEqual('items');
  });

  it('pluralizes correctly when 1 item is present', () => {
    const count = 1;
    expect(pluralize(str, count)).toStrictEqual('item');
  });

  it('pluralizes correctly when more items are present', () => {
    const count = 2;
    expect(pluralize(str, count)).toStrictEqual('items');
  });
});
