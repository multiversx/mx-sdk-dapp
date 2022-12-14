import React from 'react';
import { expect, jest } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, fireEvent } from '@storybook/testing-library';
import { LoginButton as LoginBtn } from './../LoginButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/LoginButton',
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

export const LoginButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const buttonDataTestId = 'loginButton';

LoginButton.args = {
  text: 'Login basic',
  'data-testid': buttonDataTestId,
  onLogin: jest.fn()
};

LoginButton.parameters = { ...Template.parameters };
LoginButton.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.findByTestId(String(args['data-testid']));
  expect(args.onLogin).toHaveBeenCalledTimes(0);

  fireEvent.click(loginButton);
  expect(args.onLogin).toHaveBeenCalledTimes(1);
};
