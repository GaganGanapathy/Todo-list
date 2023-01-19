const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        static: './dist',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: "asset/inline",
            },
            {
                test: /\.(css)$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss)$/i,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader'
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: () => [
                          require('autoprefixer')
                        ]
                      }
                    }
                  },
                  {
                    loader: 'sass-loader'
                  }
            
                ],      
            },
        ],
    }
};