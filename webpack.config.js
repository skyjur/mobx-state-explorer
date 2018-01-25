module.exports = {
    entry: {
        "mobxStateExplorer": ["./src/style-autoload.ts", "./src/index.ts"],
        "examples/todoList": ["./examples/todoList/index.ts"]
    },
    output: {
        filename: "[name].js",
        library: ['[name]'],
        libraryTarget: 'umd',
        path: __dirname + '/dist',
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        plugins: []
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css?$/, use: ["raw-loader"] },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    externals: {
        "mobx-state-explorer": "mobxStateExplorer",
        "mobx": "mobx",
        "mobx-react": "mobxReact",
        "react": "React",
        "react-dom": "ReactDOM"
    }
};