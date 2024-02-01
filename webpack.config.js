const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        app: "./src/app.ts"
    },
    output: {
        filename: "[name].bundle.js",
        library: "souza",
        path: path.resolve(__dirname, "web"),
        publicPath: "https://www.souza.eti.br/",
        globalObject: "self"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts"
        ],
        modules: [
            "node_modules",
            "src"
        ]
    },
    target: "web",
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
};