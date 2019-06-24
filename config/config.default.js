/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1561109580748_3813';

  // add your middleware config here
  config.middleware = [];

  config.cluster = {
    listen: {
      path: '',
      port: 8080,
      hostname: '',
    },
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/szy',
      options: {
        server: {
          poolSize: 40,
        },
      },
    },
  };

  config.user = {
    userName: 'admin',
    password: 'admin',
  };

  config.session = {
    maxAge: 3600 * 1000,
  };

  config.jwt = {
    cert: 'asy666' // jwt秘钥
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
