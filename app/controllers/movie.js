const loginHandler = require("../models/handles/loginHandler.js");
const addAccountHandler = require("../models/handles/addAccountHandler.js");

const index = async function (ctx, next) {
    await ctx.render("movie/index", {
        title: "电影网站"
    });
    return next();
};

const login = async function (ctx, next) {
    await ctx.render("movie/login", {
        title: "登录页面"
    });
    return next();
};

const register = async function (ctx, next) {
    await ctx.render("movie/register", {
        title: "注册页面"
    });
    return next();
};

const loginAccount = async function (ctx, next) {
    return await (new loginHandler()).handler(ctx, next);
};

const addAccount = async function (ctx, next) {
    return await (new addAccountHandler()).handler(ctx, next);
};

module.exports = {
    index,
    login,
    register,
    loginAccount,
    addAccount
};
