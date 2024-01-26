const coreLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  '@pspl/data-context',
]);

module.exports = {
  name: 'monthly-sip',

  exposes: {
    './Module': './src/remote-entry.ts',
  },

  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }
    // Returning false means the library is not shared.
    return false;
  },
};
