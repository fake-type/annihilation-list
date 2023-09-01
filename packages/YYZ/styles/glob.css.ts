import { martianMono } from './fontFaces.css'
import { globalStyle, style } from '@vanilla-extract/css'

globalStyle('*', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
})

globalStyle('body', {
	fontFamily: ['system-ui', martianMono],
	background: '#060506',
	color: '#564791',
})
