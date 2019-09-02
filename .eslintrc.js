module.exports = {
  env: { node: true },
  extends: ['eslint-config-airbnb-base'],
  rules: require('./index.js').rules,
};
