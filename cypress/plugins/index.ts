import { startDevServer } from '@cypress/webpack-dev-server';
import path from 'path';

const getWpConfigurations = () => {
	const relativeBaseRoute = `../..`;
	const wpConfig = require(`${relativeBaseRoute}/config/webpack.dev`);
	delete wpConfig.output;
	delete wpConfig.target;
	wpConfig.stats = 'errors-only';
	return wpConfig;

};

module.exports = (on) => {
	on('dev-server:start', (options) => {
		return startDevServer({
			options,
			webpackConfig: getWpConfigurations(),
		});
	});
};
