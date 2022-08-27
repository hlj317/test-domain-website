const mysql = require("../common/mysql.js");
const BaseModel = require("./baseModel.js");
const dbConf = require("../config/db.js");


class proModel extends BaseModel {
	constructor() {
		/**
         * @type {string}
         */
		let database = dbConf.database || "";
		/**
         * @type {string}
         */
		let proTable = dbConf.pro_table || "";
		super(proTable, database);
	}

	async addNewPro(title,content) {
		let fieldStr = dbConf.pro_table_field.join(",");
		let valueArr = [];
		valueArr.push(title.toString());
		valueArr.push(content.toString());
		const sql = `INSERT INTO ${this.getRealTableName()} (${fieldStr}) VALUES (?,?)`;
		let result = await mysql.bindSql(sql, valueArr, this.dbName)
			.catch((e) => {
				console.log(e);
			});

		return result;
	}

    //获得新闻数据
	async getNews() {
		let sql = "",
			result = [];
		sql = `SELECT * FROM ${this.getRealTableName()}`;
		result = await mysql.bindSql(sql, this.dbName)
			.catch((e) => {
				console.log(e);
			});
		return result;
	}

}

module.exports = proModel;