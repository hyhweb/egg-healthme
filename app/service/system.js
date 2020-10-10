const Service = require('egg').Service;

class SystemService extends Service {
  async list() {

    const list = await this.app.mysql.select('user');
    return list;
    // return this.app;
  }
}

module.exports = SystemService;
