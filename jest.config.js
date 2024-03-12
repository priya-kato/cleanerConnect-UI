global.__DEV__ = true;
module.exports = {
  preset: 'react-native',
  globals: {
    __DEV__: true,
  },
  transformIgnorePatterns: [],
  setupFiles: ['./jest.setup'],

};
