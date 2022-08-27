const BaseClass = require("./baseClass.js");

class nideshopAdHandler extends BaseClass {
    constructor() {
        super();
    }

    async run (ctx, next, success, message, errCode, nideshopAdData, total, page, pageSize) {
        if(success){
            ctx.body = {
                success,
                message,
                page,
                pageSize,
                errCode,
                total,
                "data":nideshopAdData
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
            nideshopAdData = null,
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
            nideshopAdData = await this.nideshopAdModel.getNideshopAd(page,pageSize);
            console.log(JSON.stringify(nideshopAdData));
            total = await this.nideshopAdModel.getNideshopAdTotal();
            result = await this.run(ctx, next, success, message, errCode, nideshopAdData, total, page,pageSize);
        }catch(e){
            message = e;
            errCode = 505;
            success = false;
            result = await this.run(ctx, next, success, message, errCode);
        }
        return result;
    }
}

module.exports = nideshopAdHandler;