import {Meta, StoryFn} from '@storybook/react';

import Button from './Button';
import './../../scss/_vars.scss'
export default {
	title:'Button',
	component:Button,
	argTypes: {
		 variant:{
					 type:'string',
			 description:'Вариант внешнего вида кнопки',
			 defaultValue:'one',
			 options:['primary','secondary'],
			 control:{
            	type:'radio',
			 },
		 },
		 size: {
			type:'string',
			description:'Размер кнопки',
			defaultValue:'medium',
			options:['small','medium','large'],
			control: {
				type:'radio',
			},
		 },
		 type:{
			type:'string',
			description:'Тип кнопки',
			defaultValue:'one',
			options:['one','two'],
			control:{
				type:'radio',
			},
		 },
		 children: {
			type:'string',
			name:'label',
			defaultValue:'Click me',
		 },
	},
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => (
	<Button {...args} />
);

export const Default = Template.bind({});

Default.args = {
	children:'Press me',
	variant:'primary',
}
export const Large = Template.bind({})

Large.args = {
	children:'Press me',
	size:'large',
}