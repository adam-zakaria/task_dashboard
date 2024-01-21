module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    // If you're using CSS modules, for example
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
};
