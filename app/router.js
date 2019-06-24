'use strict';

const userRouter = require('./routes/user');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 后台授权中间件
  // const auth = app.middleware.auth()
  // 首页
  router.get('/', controller.home.index);
  userRouter(app);
};
