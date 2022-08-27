let home = async function (ctx, next) {
    await ctx.render("pc/home", {
        title: "篮球博客",
        description: "篮球博客",
        keyword: "篮球博客"
    });

    return next();
};

let index = async function (ctx, next) {
    await ctx.render("pc/index", {
        title: "篮球博客",
        description: "篮球博客",
        keyword: "篮球博客"
    });

    return next();
};

module.exports = {
    home,
    index
};
