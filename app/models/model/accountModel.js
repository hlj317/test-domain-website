const mysql = require("../common/mysql.js");
const BaseModel = require("./baseModel.js");
const dbConf = require("../config/db.js");
const SqlString = require("sqlstring");
const _ = require("underscore");
// const xss = require("xss");

//处理Emoj表情过滤
// const filteremoji = (originText) => {
// 	let ranges = [
// 		"\ud83c[\udf00-\udfff]",
// 		"\ud83d[\udc00-\ude4f]",
// 		"\ud83d[\ude80-\udeff]",
// 	];
// 	let newText = originText.replace(new RegExp(ranges.join("|"), "g"), "");
// 	return newText;
// };

class AccountModel extends BaseModel {
	constructor() {
		/**
         * @type {string}
         */
		let database = dbConf.database || "";
		/**
         * @type {string}
         */
		let accountTable = dbConf.account_table || "";
		super(accountTable, database);
	}

	/**
     * 账号注册
     */

	async addAccount(username, password) {

		let fieldStr = dbConf.account_table_field.join(",");

		let valueArr = [];

		// group_name
		valueArr.push(username);
		// group_score
		valueArr.push(password);
		const sql = `INSERT INTO ${this.getRealTableName()} (${fieldStr}) VALUES (?,?)`;
		let result = await mysql.bindSql(sql, valueArr, this.dbName)
			.catch((e) => {
				console.log(e);
			});

		return result;
	}

	/**
     *  账号登录
     */
	async getAccount(username, password) {
		if (!username && !password) {
			return false;
		}
		let sql = `SELECT * FROM ${this.getRealTableName()} WHERE username = '${username}' AND password = '${password}'`;
		let res = await mysql.runSql(sql, this.dbName)
			.catch((err) => {
				console.log(err);
			});
		return res[0];
	}

}

module.exports = AccountModel;