const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html"
    })]
};
