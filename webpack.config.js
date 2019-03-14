module.exports = {
    watch: true,
    entry: './src/counter.es6',
    output: {
        filename: 'build/counter.js',
        libraryTarget: "umd"
    },

    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'es2015', 'react', 'stage-2' ]
                    }
                }
            }
        ]
    }
};