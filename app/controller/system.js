'use strict';
const Controller = require('egg').Controller;

class SystemController extends Controller {
  async userList() {
    const { ctx, service } = this;
    const list = await service.system.list();
    ctx.body = list;
  }
}

module.exports = SystemController;
