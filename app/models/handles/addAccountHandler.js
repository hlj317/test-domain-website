const BaseClass = require("./baseClass.js");

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
	async run(ctx,next,statesCode,message) {

		if(statesCode === "200"){
			ctx.body = {
				success : true,
				message : message || "注册成功",
				statesCode : "200"
			};
		}else if(statesCode === "206"){
			ctx.body = {
				success : false,
				message : message || "账号重名",
				statesCode : "206"
			};
		}else{
			ctx.body = {
				success : false,
				message : message || "注册失败",
				statesCode : "505"
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

		isLogin = await this.accountModel.addAccount(username,password);
		if(isLogin){
			runDate = await this.run(ctx, next,"200","注册成功");
		}else{
			runDate = await this.run(ctx, next,"505","注册失败");
		}

		return runDate;

	}

}

module.exports = loginHandler;