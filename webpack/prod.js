const merge = require("webpack-merge");
const base = require("./base");
const terserPlugin = require("terser-webpack-plugin");

module.exports = merge(base, {
    mode: "production",
    output: {
        filename: "bundle.min.js"
    },
    devtool: false,
    performance: {
        maxEntrypointSize: 900000,
        maxAssetSize: 900000
    },
    optimization: {
        minimizer: [
            new terserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
});