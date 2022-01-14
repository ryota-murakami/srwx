import { Story, Meta } from '@storybook/react';
import { StoreUiShared, StoreUiSharedProps } from './store-ui-shared';

export default {
  component: StoreUiShared,
  title: 'StoreUiShared',
} as Meta;

const Template: Story<StoreUiSharedProps> = (args) => (
  <StoreUiShared {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
