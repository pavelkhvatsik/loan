module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
        alias: {
          src: './src',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@enums': './src/enums',
          '@utils': './src/utils',
        },
      },
    ],
  ],
  assumptions: {
    setPublicClassFields: false,
  },
};
