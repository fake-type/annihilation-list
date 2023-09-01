import { fontFace } from '@vanilla-extract/css'

export const martianMono = fontFace([
	{
		fontWeight: 300,
		fontStyle: 'normal',
		fontDisplay: 'swap',
		fontStretch: 'semi-condensed',

		src: [
			'local(Martian Mono)',
			'url(../fonts/MartianMonoCondensed-ExtraLight.woff2) format(woff2)',
		],
	},
	{
		fontWeight: 400,
		fontStyle: 'normal',
		fontDisplay: 'swap',
		fontStretch: 'normal',

		src: ['local(Martian Mono)', 'url(../fonts/MartianMono-Regular.woff2) format(woff2)'],
	},

	{
		fontWeight: 700,
		fontStyle: 'normal',
		fontDisplay: 'swap',
		fontStretch: 'condensed',

		src: ['local(Martian Mono)', 'url(../fonts/MartianMono-Bold.woff2) format(woff2)'],
	},
])
