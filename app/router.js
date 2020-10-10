'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/system')(app);
  require('./router/home')(app);
  /*  const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/userList', controller.system.userList);*/
};
