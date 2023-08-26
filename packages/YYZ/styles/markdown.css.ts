import { globalStyle, style } from '@vanilla-extract/css'

export const markdownCSS = style({})

globalStyle(`${markdownCSS} img`, {
	width: '200px',
	height: 'auto',
})
