import { ModuleFederationConfig } from '@nx/webpack';

const sharedLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  'react-dropzone',
  // 'react-i18next',
  // 'framer-motion',
  '@emotion/react',
  '@emotion/styled',
  '@chakra-ui/react',
]);

const config: ModuleFederationConfig = {
  name: 'myremote',
  remotes: [], // external_portal module needs to be loaded dynamically
  shared: (libraryName, defaultConfig) => {
    if (sharedLibraries.has(libraryName)) {
      return {
        ...defaultConfig,
        singleton: true
      };
    }

    // Returning false means the library is not shared.
    return false;
  },
};

export default config;
