module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@domain': './src/domain',
          '@infra': './src/infra',
        },
      },
    ],
  ],
};
