const pc = require("../../app/controllers/pc");

module.exports = {
    "/": pc.home,
    "/pc/home": pc.home
};   
