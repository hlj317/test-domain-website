const mysql = require("../common/mysql.js");
const BaseModel = require("./baseModel.js");
const dbConf = require("../config/db.js");
const SqlString = require("sqlstring");
const _ = require("underscore");

class commentsModel extends BaseModel {
	constructor() {
		/**
         * @type {string}
         */
		let database = dbConf.database || "";
		/**
         * @type {string}
         */
		let commentTable = dbConf.comment_table || "";
		super(commentTable, database);
	}

    //查询社区评论列表
	async getCommentsList(page,pageSize,type) {

		let sql = "",
			obj = {},
            fieldStr = dbConf.comment_table_field.join(",");

        //type：0是不区分类型，1是好评，2是中评，3是差评（此参数传0或者不传，表示不区分评论类型）
        if(type){
            sql = `SELECT ${fieldStr} FROM ${this.getRealTableName()} WHERE type=${type} limit ${(page-1)*pageSize},${pageSize}`;
        }else{
            sql = `SELECT ${fieldStr} FROM ${this.getRealTableName()} limit ${(page-1)*pageSize},${pageSize}`;   
        }

        obj = await mysql.bindSql(sql, this.dbName)
            .catch((e) => {
                console.log(e);
        });

		return obj;
	}

    //查询社区评论当前总数量
    async getCommentsTotal(type) {

		let sql = "",
            obj = {},
			total = 0;

        //type：0是不区分类型，1是好评，2是中评，3是差评（此参数传0或者不传，表示不区分评论类型）
        if(type){
            sql = `SELECT COUNT(*) FROM ${this.getRealTableName()} WHERE type=${type}`;
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

module.exports = commentsModel;