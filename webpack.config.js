const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = env => {
    const isProduction = env === "production";

    return {
        entry: ["@babel/polyfill", "./src/app.js", "jquery"],
        output: {
            path: path.join(__dirname, "dist"),
            filename: "bundle.js",
            publicPath: "/",
        },
        optimization: {
            minimizer: [new UglifyJsPlugin()],
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        !isProduction ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                    loader: "file-loader?name=./public/images/[name].[ext]",
                },
            ],
        },
        plugins: [
            new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
            new CleanWebpackPlugin(["dist"]),
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                favicon: "./public/images/favicon.png",
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css",
            }),
        ],

        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            proxy: {
                "/api/*": {
                    target: "http://localhost:5000",
                    secure: false,
                    changeOrigin: true,
                },
            },
        },
    };
};
