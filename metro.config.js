const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  transformer: {
    ...defaultConfig.transformer,
    assetPlugins: [
      ...(defaultConfig.transformer.assetPlugins || []),
      'expo-asset/tools/hashAssetFiles',
    ],
  },
  resolver: {
    ...defaultConfig.resolver,
    sourceExts: [
      ...new Set([...defaultConfig.resolver.sourceExts, 'cjs', 'mjs']),
    ],
    assetExts: [
      ...new Set([...defaultConfig.resolver.assetExts, 'glb', 'gltf']),
    ],
  },
};

module.exports = mergeConfig(defaultConfig, config);
