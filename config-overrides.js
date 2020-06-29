const { addDecoratorsLegacy, override } = require("customize-cra");
module.exports = override(
addDecoratorsLegacy()//配置装饰器器 
);