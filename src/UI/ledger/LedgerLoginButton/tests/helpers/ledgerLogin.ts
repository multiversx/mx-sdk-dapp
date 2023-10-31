import { fireEvent } from '@testing-library/react';
import { RenderType, testAddress } from '__mocks__';
import { DataTestIdsEnum } from 'constants/index';

export const ledgerLogin = async (methods: RenderType) => {
  const ledgerLoginButton = await methods.findByTestId(
    DataTestIdsEnum.ledgerLoginButton
  );

  fireEvent.click(ledgerLoginButton);

  const ledgerConnectBtn = await methods.findByTestId(
    DataTestIdsEnum.ledgerConnectBtn
  );

  fireEvent.click(ledgerConnectBtn);

  const addressTableContainerTitle = await methods.findByTestId(
    DataTestIdsEnum.addressTableContainer
  );

  expect(addressTableContainerTitle).toBeInTheDocument();
  const confirmBtn = methods.getByTestId(DataTestIdsEnum.confirmBtn);
  fireEvent.click(confirmBtn);

  const ledgerConfirmAddress = await methods.findByTestId(
    DataTestIdsEnum.ledgerConfirmAddress
  );

  expect(ledgerConfirmAddress).toHaveTextContent(testAddress);
};
