import { fireEvent } from '@testing-library/react';
import { RenderType } from '__mocks__';
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

  const addressTableContainerTitle = methods.getByTestId(
    DataTestIdsEnum.addressTableContainer
  );

  expect(addressTableContainerTitle).toBeInTheDocument();
  const confirmBtn = methods.getByTestId(DataTestIdsEnum.confirmBtn);
  fireEvent.click(confirmBtn);

  const ledgerLoading = await methods.findByTestId(
    DataTestIdsEnum.ledgerLoading
  );

  expect(ledgerLoading).toHaveTextContent('Waiting for device');
};
