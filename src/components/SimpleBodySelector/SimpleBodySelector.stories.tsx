import React from 'react'
import { Story, Meta } from '@storybook/react'
import SimpleBodySelector, { SimpleBodySelectorProps } from './SimpleBodySelector'

const meta: Meta = {
  title: 'Components/SimpleBody',
  component: SimpleBodySelector
}

export default meta

const Template: Story<SimpleBodySelectorProps> = (args) => <SimpleBodySelector {...args} />

export const Unselected = Template.bind({})
Unselected.args = {}

export const Selected = Template.bind({})
Selected.args = { value: { head: true } }

export const CustomColor = Template.bind({})
CustomColor.args = { color: 'blue', selectedColor: 'green' }
