/**
 * All of this should be provided by a WordPress backend
 *
 * Mock it for new so we can build the scaffold
 *
 * Required inputs to initialize the editor
 */

export const POST_ID = -1;

export const editorSettings = {
	alignWide: true,
	availableTemplates: [],
	allowedBlockTypes: true,
	disableCustomColors: false,
	disableCustomFontSizes: false,
	disablePostFormats: true,
	titlePlaceholder: 'Add title',
	bodyPlaceholder: 'Start writing or type / to choose a block',
	isRTL: false,
	autosaveInterval: 60,
	maxUploadFileSize: 1536000000,
	allowedMimeTypes: {
		'jpg|jpeg|jpe': 'image/jpeg',
		png: 'image/png',
		gif: 'image/gif',
		pdf: 'application/pdf',
		doc: 'application/msword',
		docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		docm: 'application/vnd.ms-word.document.macroEnabled.12',
		'pot|pps|ppt': 'application/vnd.ms-powerpoint',
		pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
		pptm: 'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
		odt: 'application/vnd.oasis.opendocument.text',
		ppsx: 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
		ppsm: 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',
		'xla|xls|xlt|xlw': 'application/vnd.ms-excel',
		xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		xlsm: 'application/vnd.ms-excel.sheet.macroEnabled.12',
		xlsb: 'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
		key: 'application/vnd.apple.keynote',
		'mp3|m4a|m4b': 'audio/mpeg',
		wav: 'audio/wav',
		'ogg|oga': 'audio/ogg',
		zip: 'application/zip',
		'gz|gzip': 'application/x-gzip',
		asc: 'application/pgp-keys',
	},
	styles: [
		{
			css:
				'body{font-family:"Noto Serif",serif;font-size:16px;line-height:1.8;color:#191e23}h1{font-size:2.44em}h2{font-size:1.95em}h3{font-size:1.56em}h4{font-size:1.25em}h5{font-size:1em}h6{font-size:.8em}h1,h2,h3{line-height:1.4}h4{line-height:1.5}h1{margin-top:.67em;margin-bottom:.67em}h2{margin-top:.83em;margin-bottom:.83em}h3{margin-top:1em;margin-bottom:1em}h4{margin-top:1.33em;margin-bottom:1.33em}h5{margin-top:1.67em;margin-bottom:1.67em}h6{margin-top:2.33em;margin-bottom:2.33em}h1,h2,h3,h4,h5,h6{color:inherit}p{font-size:inherit;line-height:inherit;margin-top:28px}ol,p,ul{margin-bottom:28px}ol,ul{padding:inherit}ol li,ol ol,ol ul,ul li,ul ol,ul ul{margin-bottom:0}ul{list-style-type:disc}ol{list-style-type:decimal}ol ul,ul ul{list-style-type:circle}',
		},
		{ css: "body { font-family: 'Noto Serif' }" },
	],
	imageSizes: [
		{ slug: 'thumbnail', name: 'Thumbnail' },
		{ slug: 'medium', name: 'Medium' },
		{ slug: 'large', name: 'Large' },
		{ slug: 'full', name: 'Full Size' },
	],
	richEditingEnabled: true,

	// @TODO postLock stuff is not ok
	postLock: { isLocked: false, activePostLock: '1571308663:19549408' },
	postLockUtils: {
		nonce: '[nonsense]',
		unlockNonce: '[nonsense]',
		ajaxUrl: 'https://example.com/wp-admin/admin-ajax.php',
	},
	// @TODO ^^

	colors: [
		{ name: 'Medium Blue', slug: 'medium-blue', color: '#0087be' },
		{ name: 'Bright Blue', slug: 'bright-blue', color: '#00aadc' },
		{ name: 'Dark Gray', slug: 'dark-gray', color: '#4d4d4b' },
		{ name: 'Light Gray', slug: 'light-gray', color: '#b3b3b1' },
		{ name: 'White', slug: 'white', color: '#fff' },
	],
	hasPermissionsToManageWidgets: true,
	availableLegacyWidgets: {
		WP_Widget_Pages: {
			name: 'Pages',
			description: 'A list of your site\u2019s Pages.',
			isCallbackWidget: false,
			isHidden: true,
		},
		WP_Widget_Calendar: {
			name: 'Calendar',
			description: 'A calendar of your site\u2019s posts.',
			isCallbackWidget: false,
			isHidden: true,
		},
		WP_Widget_Archives: {
			name: 'Archives',
			description: 'A monthly archive of your site\u2019s Posts.',
			isCallbackWidget: false,
			isHidden: true,
		},
		// @TODO Just a few standard looking widgets ^^ missing a lot
	},
	__experimentalEnableLegacyWidgetBlock: false,
	__experimentalEnableMenuBlock: false,
	__experimentalBlockDirectory: false,
	__experimentalEnableFullSiteEditing: false,
};

export const initialEdits = { title: '', content: '', excerpt: '' };

export const post = {
	id: POST_ID,
	date: '2019-10-17T10:37:43',
	date_gmt: '2019-10-17T10:37:43',
	guid: {
		rendered: `https://example.com/?p=${ POST_ID }`,
		raw: `https://example.com/?p=${ POST_ID }`,
	},
	modified: '2019-10-17T10:37:43',
	modified_gmt: '2019-10-17T10:37:43',
	password: '',
	slug: '',
	status: 'auto-draft',
	type: 'post',
	link: `https://example.com/?p=${ POST_ID }`,
	title: '',
	content: { raw: '', rendered: '', protected: false, block_version: 0 },
	excerpt: { raw: '', rendered: '', protected: false },
	author: -1,
	featured_media: 0,
	comment_status: 'open',
	ping_status: 'open',
	sticky: false,
	template: '',
	format: 'standard',
	meta: {},
	categories: [],
	tags: [],
	permalink_template: `https://example.com/?p=${ POST_ID }`,
	generated_slug: 'auto-draft',
	_links: {},
};
