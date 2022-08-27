const BaseClass = require("./baseClass.js");
const g = require("../config/code.js");
// const session = require("koa-session");

class loginHandler extends BaseClass {
	constructor() {
		super();
	}

	/**
     *
     * @param ctx
     * @param next
     * @param oid 新用户oid
     * @returns {Promise<*>}
     */
	async run(ctx, next,isLogin,message) {

		if(isLogin){
			ctx.body = {
				success: true,
				message: message || "登录成功"
			};
		}else{
			ctx.body = {
				success: false,
				message: message || "密码错误"
			};
		}

		return next();
	}

	async handler(ctx, next) {

		this.ctx = ctx;
		this.next = next;
		let username = "",
			password = "",
			isLogin = false,
			runDate = "";
        
		if (!this.checkMethod(ctx.request.method)) {
			this.responseErrorMessage(405, "请求方法无效");
			return next();
		}

        username = ctx.request.body.username;
        password = ctx.request.body.password;
        isLogin = await this.accountModel.getAccount(username,password);

        if(isLogin){
            runDate = await this.run(ctx, next,isLogin,"登陆成功");
        }else{
            runDate = await this.run(ctx, next,false,"登陆失败");
        }

		return runDate;

	}

}

module.exports = loginHandler;