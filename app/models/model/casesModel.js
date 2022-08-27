const mysql = require("../common/mysql.js");
const BaseModel = require("./baseModel.js");
const dbConf = require("../config/db.js");
const _ = require("underscore");

class casesModel extends BaseModel {
	constructor() {
		/**
         * @type {string}
         */
		let database = dbConf.database || "";
		/**
         * @type {string}
         */
		let caseTable = dbConf.case_table || "";
		super(caseTable, database);
	}

    //查询口碑案例列表
	async getCasesList(page,pageSize,caseType) {

		let sql = "",
			obj = {},
            fieldStr = dbConf.case_table_field.join(",");

        //caseType：0是图片类型，1是短视频类型（此参数不传，表示不区分案例类型）
        if(caseType === 0 || caseType === 1){
            sql = `SELECT ${fieldStr} FROM ${this.getRealTableName()} WHERE case_type=${caseType} limit ${(page-1)*pageSize},${pageSize}`;
        }else{
            sql = `SELECT ${fieldStr} FROM ${this.getRealTableName()} limit ${(page-1)*pageSize},${pageSize}`;   
        }

        obj = await mysql.bindSql(sql, this.dbName)
            .catch((e) => {
                console.log(e);
        });

		return obj;
	}

    //查询口碑案例当前总数量
    async getCasesTotal(caseType) {

		let sql = "",
            obj = {},
			total = 0;

        //caseType：0是图片类型，1是短视频类型（此参数不传，表示不区分案例类型）
        if(caseType === 0 || caseType === 1){
            sql = `SELECT COUNT(*) FROM ${this.getRealTableName()} WHERE case_type=${caseType}`;
        }else{
            sql = `SELECT COUNT(*) FROM ${this.getRealTableName()}`;   
        }

        obj = await mysql.bindSql(sql, this.dbName)
            .catch((e) => {
                console.log(e);
        });
        total = obj[0]["COUNT(*)"] || 0;
		return total;
	}
}

module.exports = casesModel;