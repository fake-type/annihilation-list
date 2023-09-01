import { style } from '@vanilla-extract/css'

export const paperStyle = style({
	display: 'grid',
	gridAutoFlow: 'column dense',
	maxWidth: '1200px',
	margin: 'auto',
})
