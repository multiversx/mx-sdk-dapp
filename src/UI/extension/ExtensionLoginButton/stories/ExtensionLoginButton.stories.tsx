import React from 'react';
import { expect, jest } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, fireEvent } from '@storybook/testing-library';
import { ExtensionLoginButton as LoginBtn } from '../index';

export default {
  title: 'UI/ExtensionLoginButton',
  component: LoginBtn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginBtn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginBtn> = (args) => {
  return <LoginBtn {...args} />;
};

export const ExtensionLoginButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

ExtensionLoginButton.args = {
  loginButtonText: 'Maiar DeFi Wallet',
  onLoginRedirect: jest.fn(),
  'data-testid': 'extension-login-button'
};

ExtensionLoginButton.parameters = { ...Template.parameters };
ExtensionLoginButton.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.findByTestId(String(args['data-testid']));
  expect(args.onLoginRedirect).toHaveBeenCalledTimes(0);

  fireEvent.click(loginButton);
  expect(args.onLoginRedirect).toHaveBeenCalledTimes(1);
};
