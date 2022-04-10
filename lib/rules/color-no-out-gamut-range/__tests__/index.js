'use strict';

const { messages, ruleName } = require('..');

testRule({
	ruleName,
	config: [true],

	accept: [
		{
			code: 'a {  color: lch(50% 0 0);  color: lch(48.8% 82.3 283.1); }',
			description: 'lch in rgb range',
		},
		{
			code: '@media (color-gamut: p3) { a { color: lch(48% 82 283); } }',
			description: 'lch in p3 range',
		},
		{
			code: '@media (color-gamut: rec2020) { a { color: lch(48% 82 283); } }',
			description: 'lch in p3 range',
		},
	],
	reject: [
		{
			code: 'a {  color: lch(48% 82 283); }',
			message: messages.rejected(),
			line: 1,
			column: 7,
			description: 'color is not visible in rgb range',
		},
	],
});
