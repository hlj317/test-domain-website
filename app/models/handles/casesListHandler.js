const BaseClass = require("./baseClass.js");

class casesListHandler extends BaseClass {
    constructor() {
        super();
    }

    async run (ctx, next, success, message, errCode, casesListData, total, page, pageSize) {
        if(success){
            ctx.body = {
                success,
                message,
                page,
                pageSize,
                errCode,
                total,
                "data":casesListData
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
            caseType = ctx.request.body.caseType,
            casesListData = null,
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
            casesListData = await this.casesModel.getCasesList(page,pageSize,caseType);
            total = await this.casesModel.getCasesTotal(caseType);
            result = await this.run(ctx, next, success, message, errCode, casesListData, total, page,pageSize);
        }catch(e){
            message = e;
            errCode = 505;
            success = false;
            result = await this.run(ctx, next, success, message, errCode);
        }
        return result;
    }
}

module.exports = casesListHandler;