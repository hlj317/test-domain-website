const BaseClass = require("./baseClass.js");

class productsListHandler extends BaseClass {
    constructor() {
        super();
    }

    async run (ctx, next, success, message, errCode, productsListData, total, page, pageSize) {
        if(success){
            ctx.body = {
                success,
                message,
                page,
                pageSize,
                errCode,
                total,
                "data":productsListData
            };
        }else{
            success,
            message,
            errCode
        }
        return next();
    }

    async handler (ctx, next) {

        this.ctx = ctx;
        this.next = next;
        let page = ctx.request.body.page || 1,
            pageSize = ctx.request.body.pageSize || 10,
            cid = ctx.request.body.cid,
            bid = ctx.request.body.bid,
            isHot = ctx.request.body.isHot,
            productsListData = null,
            result = null,
            message = "查询成功",
            total = 0,
            success = true,
            errCode = 0;

        if (!this.checkMethod(ctx.request.method,"post")) {
            this.responseErrorMessage(405, "请求方式无效");
            return next();
        }
        try{
            productsListData = await this.productsModel.getProductsList(page,pageSize,cid,bid,isHot);
            total = await this.productsModel.getProductsTotal(cid,bid,isHot);
            result = await this.run(ctx, next, success, message, errCode, productsListData, total, page,pageSize);
        }catch(e){
            message = e;
            errCode = 505;
            success = false;
            result = await this.run(ctx, next, success, message, errCode);
        }
        return result;
    }
}

module.exports = productsListHandler;