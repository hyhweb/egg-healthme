'use strict';
module.exports = app => {
  app.router.get('/userList', app.controller.system.userList);
};
