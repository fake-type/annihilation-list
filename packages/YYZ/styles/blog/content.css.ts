import { createContainer, style, globalStyle } from '@vanilla-extract/css'

const container = createContainer()

export const contentStyle = style({
	containerType: 'inline-size',
	containerName: container,
})

globalStyle(`${contentStyle} img`, {
	width: 'auto',
	maxHeight: '25em;',
})
