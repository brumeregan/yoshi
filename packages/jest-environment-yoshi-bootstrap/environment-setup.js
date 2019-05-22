const loadYoshiConfig = require('yoshi-config/jest.js');

const jestYoshiConfig = loadYoshiConfig();

const bootstrapConfig = jestYoshiConfig.bootstrap;

global.__setup__ = bootstrapConfig && bootstrapConfig.setup;
global.__teardown__ = bootstrapConfig && bootstrapConfig.teardown;
