const AccountModel = require("../model/accountModel.js");
const CasesModel = require("../model/casesModel.js");
const ProductsModel = require("../model/productsModel.js");
const CommentsModel = require("../model/commentsModel.js");
const NideshopAdModel = require("../model/nideshopAdModel.js");

class BaseClass {
	constructor() {
		this.accountModel = AccountModel.instance();
        this.casesModel = CasesModel.instance();
        this.productsModel = ProductsModel.instance();
        this.commentsModel = CommentsModel.instance();
        this.nideshopAdModel = NideshopAdModel.instance();
		this.ctx = "";
	}

	static instance() {
		const clazz = this.name;
		if (!BaseClass.instances[clazz]) {
			BaseClass.instances[clazz] = new this();
		}

		return BaseClass.instances[clazz];
	}

	/**
     * 检查方法 方法只能是'get'或者 'post'
     *
     * @param method
     * @returns {boolean}
     */
	checkMethod(method,passMethod) {
        if(passMethod){
            return method.toLowerCase() === passMethod.toLowerCase();
        }else{
            return method.toLowerCase() === "get" || method.toLowerCase() === "post";
        }
	}

	responseErrorMessage(errCode = 0, message = "请求失败，检查网络") {
		this.ctx.body = {
			success: false,
			errCode,
			message,
		};
	}

}

BaseClass.instances = {};

module.exports = BaseClass;