const mysql = require("../common/mysql.js");
const BaseModel = require("./baseModel.js");
const dbConf = require("../config/db.js");
const _ = require("underscore");

class nideshopAdModel extends BaseModel {
	constructor() {
		/**
         * @type {string}
         */
		let database = dbConf.database || "";
		/**
         * @type {string}
         */
		let nideshopAdTable = dbConf.nideshop_ad_table || "";
		super(nideshopAdTable, database);
	}

    //查询广告列表
	async getNideshopAd(page,pageSize) {

		let sql = "",
			obj = {},
            fieldStr = dbConf.nideshop_ad_table_field.join(",");

        sql = `SELECT ${fieldStr} FROM ${this.getRealTableName()} limit ${(page-1)*pageSize},${pageSize}`;  

        obj = await mysql.bindSql(sql, this.dbName)
            .catch((e) => {
                console.log(e);
        });

		return obj;
	}

    //查询广告总数量
    async getNideshopAdTotal() {

		let sql = "",
            obj = {},
			total = 0;

        sql = `SELECT COUNT(*) FROM ${this.getRealTableName()}`; 

        obj = await mysql.bindSql(sql, this.dbName)
            .catch((e) => {
                console.log(e);
        });
        total = obj[0]["COUNT(*)"] || 0;
		return total;
	}

}

module.exports = nideshopAdModel;