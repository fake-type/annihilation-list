import { globalFontFace, globalStyle } from '@vanilla-extract/css'

enum FontFaces {
	SystemUI = 'system-ui',
	MartianMono = 'Martian Mono',
}

globalFontFace(FontFaces.MartianMono, {
	fontWeight: 300,
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontStretch: 'semi-condensed',

	src: [
		'local(Martian Mono)',
		'url(../fonts/MartianMonoCondensed-ExtraLight.woff2) format(woff2)',
	],
})

globalFontFace(FontFaces.MartianMono, {
	fontWeight: 400,
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontStretch: 'normal',

	src: ['local(Martian Mono)', 'url(../fonts/MartianMono-Regular.woff2) format(woff2)'],
})

globalFontFace(FontFaces.MartianMono, {
	fontWeight: 700,
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontStretch: 'condensed',

	src: ['local(Martian Mono)', 'url(../fonts/MartianMono-Bold.woff2) format(woff2)'],
})

globalStyle('body', {
	fontFamily: Object.values(FontFaces),
	background: '#060506',
	color: '#564791',
})
