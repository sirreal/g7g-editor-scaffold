module.exports = ( { config } ) => {
	config.module.rules.push( {
		test: /\/stories\/.+\.js$/,
		loaders: [ require.resolve( '@storybook/source-loader' ) ],
		enforce: 'pre',
	} );

	config.plugins = config.plugins.filter(
		( plugin ) => plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
	);

	return config;
};
