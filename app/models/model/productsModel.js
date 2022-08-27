const mysql = require("../common/mysql.js");
const BaseModel = require("./baseModel.js");
const dbConf = require("../config/db.js");
const _ = require("underscore");

class productsModel extends BaseModel {
	constructor() {
		/**
         * @type {string}
         */
		let database = dbConf.database || "";
		/**
         * @type {string}
         */
		let productTable = dbConf.product_table || "";
		super(productTable, database);
	}

    //查询产品列表
	async getProductsList(page,pageSize,cid,bid,isHot) {

		let sql = "",
			obj = {},
            fieldStr = dbConf.product_table_field.join(",");

        //cid：产品一级类目，例如水梦露（此参数不传，表示不区分一级类目）
        //bid：产品二级类目，例如补水系列（此参数不传，表示不区分二级类目）
        //isHot：0不是爆款，1是爆款（此参数不传，表示不区分是否爆款商品）
        if(cid && bid && (isHot === 0 || isHot === 1)){
            sql = `SELECT ${fieldStr} FROM ${this.getRealTableName()} WHERE cid=${cid} AND bid=${bid} AND is_hot=${isHot} limit ${(page-1)*pageSize},${pageSize}`;
        }else if(cid && bid){
            sql = `SELECT ${fieldStr} FROM ${this.getRealTableName()} WHERE cid=${cid} AND bid=${bid} limit ${(page-1)*pageSize},${pageSize}`;
        }else if(cid && (isHot === 0 || isHot === 1)){
            sql = `SELECT ${fieldStr} FROM ${this.getRealTableName()} WHERE cid=${cid} AND is_hot=${isHot} limit ${(page-1)*pageSize},${pageSize}`;
        }else if(cid){
            sql = `SELECT ${fieldStr} FROM ${this.getRealTableName()} WHERE cid=${cid} limit ${(page-1)*pageSize},${pageSize}`;
        }else if(isHot === 0 || isHot === 1){
            sql = `SELECT ${fieldStr} FROM ${this.getRealTableName()} WHERE is_hot=${isHot} limit ${(page-1)*pageSize},${pageSize}`;
        }else{
            sql = `SELECT ${fieldStr} FROM ${this.getRealTableName()} limit ${(page-1)*pageSize},${pageSize}`;   
        } 

        obj = await mysql.bindSql(sql, this.dbName)
            .catch((e) => {
                console.log(e);
        });

		return obj;
	}

    //查询产品当前总数量
    async getProductsTotal(cid,bid,isHot) {

		let sql = "",
            obj = {},
			total = 0;

        //cid：产品一级类目，例如水梦露（此参数不传，表示不区分一级类目）
        //bid：产品二级类目，例如补水系列（此参数不传，表示不区分二级类目）
        //isHot：0不是爆款，1是爆款（此参数不传，表示不区分是否爆款商品）
        if(cid && bid && (isHot === 0 || isHot === 1)){
            sql = `SELECT COUNT(*) FROM ${this.getRealTableName()} WHERE cid=${cid} AND bid=${bid} AND is_hot=${isHot}`;
        }else if(cid && bid){
            sql = `SELECT COUNT(*) FROM ${this.getRealTableName()} WHERE cid=${cid} AND bid=${bid}`;
        }else if(cid && (isHot === 0 || isHot === 1)){
            sql = `SELECT COUNT(*) FROM ${this.getRealTableName()} WHERE cid=${cid} AND is_hot=${isHot}`;
        }else if(cid){
            sql = `SELECT COUNT(*) FROM ${this.getRealTableName()} WHERE cid=${cid}`;
        }else if(isHot === 0 || isHot === 1){
            sql = `SELECT COUNT(*) FROM ${this.getRealTableName()} WHERE is_hot=${isHot}`;
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

module.exports = productsModel;