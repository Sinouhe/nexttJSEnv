import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Title, { TitleProps } from '.';

export default {
  title: 'Atoms/Title',
  component: Title
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const titleH1 = Template.bind({});
export const titleH2 = Template.bind({});
export const titleH3 = Template.bind({});
export const titleH4 = Template.bind({});
export const titleH5 = Template.bind({});

titleH1.storyName = 'title h1';
titleH1.args = {
  label: 'My Title h1',
  tag: 'h1'
};

titleH2.storyName = 'title h2';
titleH2.args = {
  label: 'My Title h2',
  tag: 'h2'
};

titleH3.storyName = 'title h3';
titleH3.args = {
  label: 'My Title h3',
  tag: 'h3'
};

titleH4.storyName = 'title h4';
titleH4.args = {
  label: 'My Title h4',
  tag: 'h4'
};

titleH5.storyName = 'title h5';
titleH5.args = {
  label: 'My Title h5',
  tag: 'h5'
};
