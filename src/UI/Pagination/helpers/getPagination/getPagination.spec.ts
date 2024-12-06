import { ELLIPSIS } from 'constants/index';

import { getPagination } from '../getPagination';

describe('Pagination control function.', () => {
  const stringifyPaginationItems = <PaginationItemType>(
    paginateItems: PaginationItemType[]
  ) => paginateItems.map((paginationItem) => String(paginationItem));

  test('Watching page 1 of 2.', () => {
    const expectedResult = stringifyPaginationItems([1, 2]);
    const actualResult = getPagination({ currentPage: 1, totalPages: 2 });

    expect(actualResult).toStrictEqual(expectedResult);
  });

  test('Watching page 1 of 7.', () => {
    const expectedResult = stringifyPaginationItems([1, 2, 3, 4, 5, 6, 7]);
    const actualResult = getPagination({ currentPage: 1, totalPages: 7 });

    expect(actualResult).toStrictEqual(expectedResult);
  });

  test('Watching page 7 of 7.', () => {
    const expectedResult = stringifyPaginationItems([1, 2, 3, 4, 5, 6, 7]);
    const actualResult = getPagination({ currentPage: 7, totalPages: 7 });

    expect(actualResult).toStrictEqual(expectedResult);
  });

  test('Watching page 1 of 59.', () => {
    const expectedResultArray = [1, 2, 3, ELLIPSIS, 57, 58, 59];
    const expectedResult = stringifyPaginationItems(expectedResultArray);
    const actualResult = getPagination({ currentPage: 1, totalPages: 59 });

    expect(actualResult).toStrictEqual(expectedResult);
  });

  test('Watching page 3 of 59.', () => {
    const expectedResultArray = [1, 2, 3, 4, ELLIPSIS, 58, 59];
    const expectedResult = stringifyPaginationItems(expectedResultArray);
    const actualResult = getPagination({ currentPage: 3, totalPages: 59 });

    expect(actualResult).toStrictEqual(expectedResult);
  });

  test('Watching page 4 of 569.', () => {
    const expectedResultArray = [1, 2, 3, 4, 5, ELLIPSIS, 569];
    const expectedResult = stringifyPaginationItems(expectedResultArray);
    const actualResult = getPagination({ currentPage: 4, totalPages: 569 });

    expect(actualResult).toStrictEqual(expectedResult);
  });

  test('Watching page 444 of 569.', () => {
    const expectedResultArray = [1, ELLIPSIS, 443, 444, 445, ELLIPSIS, 569];
    const expectedResult = stringifyPaginationItems(expectedResultArray);
    const actualResult = getPagination({ currentPage: 444, totalPages: 569 });

    expect(actualResult).toStrictEqual(expectedResult);
  });

  test('Watching page 666 of 669.', () => {
    const expectedResultArray = [1, ELLIPSIS, 665, 666, 667, 668, 669];
    const expectedResult = stringifyPaginationItems(expectedResultArray);
    const actualResult = getPagination({ currentPage: 666, totalPages: 669 });

    expect(actualResult).toStrictEqual(expectedResult);
  });

  test('Watching page 1548 of 1550.', () => {
    const expectedResultArray = [1, 2, ELLIPSIS, 1547, 1548, 1549, 1550];
    const expectedResult = stringifyPaginationItems(expectedResultArray);
    const actualResult = getPagination({ currentPage: 1548, totalPages: 1550 });

    expect(actualResult).toStrictEqual(expectedResult);
  });

  test('Watching page 2004 of 2005.', () => {
    const expectedResultArray = [1, 2, 3, ELLIPSIS, 2003, 2004, 2005];
    const expectedResult = stringifyPaginationItems(expectedResultArray);
    const actualResult = getPagination({ currentPage: 2004, totalPages: 2005 });

    expect(actualResult).toStrictEqual(expectedResult);
  });

  test('Watching page 2014 of 2014.', () => {
    const expectedResultArray = [1, 2, 3, ELLIPSIS, 2012, 2013, 2014];
    const expectedResult = stringifyPaginationItems(expectedResultArray);
    const actualResult = getPagination({ currentPage: 2014, totalPages: 2014 });

    expect(actualResult).toStrictEqual(expectedResult);
  });
});
