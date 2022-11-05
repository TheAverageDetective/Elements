const path = require("path")
module.exports = {
    entry : "./public/JS/index.js",
    module : {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname + "/Public/JS/"),
        filename: 'script.bundle.js',
    },
    mode : "development",
    watch : true,
}