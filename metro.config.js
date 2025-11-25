const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for HTML files
config.resolver.assetExts.push('html');

module.exports = config;

