const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');

const baseConfig = require('./module-federation.config');

const webPackconfig = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(webPackconfig)
  // (config) => {
  //   // Update the webpack config as needed here.
  //   // e.g. `config.plugins.push(new MyPlugin())`

  //   // This will properly handle imported svg's
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack', 'url-loader'],
  //   });

  //   return config;
  // }
);
