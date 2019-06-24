'use strict';

const Controller = require('egg').Controller

class UserController extends Controller {
  async findAll() {
    let resMsg = {
      errcode: 0,
      data: {},
      msg: 'success'
    }
    let users = await this.service.user.findAll()
    resMsg.data = {
      userName: users[0].userName,
      password: users[0].password
    }
    this.ctx.body = resMsg
  }
}

module.exports = UserController
