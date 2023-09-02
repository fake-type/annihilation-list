import { Header } from './Header'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
	component: Header,
}

export const _default: StoryObj<typeof Header> = {
	render: () => <Header />,
}

export default meta
