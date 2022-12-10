const webpack = require('webpack')
const dotenv = require('dotenv')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

// this will update the process.env with environment variables in .env file
dotenv.config();

module.exports = function webpackConfig(env, args) {
  return {
    entry: {
      main: path.join(__dirname, 'src/index.tsx')
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'public'),
    },
    resolve: {
      extensions: ['.tsx', '.js'],
      plugins: [new TsconfigPathsPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          // See .babelrc for further babel config
        },
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "postcss-preset-env",
                      {
                        // Options
                      },
                    ],
                  ],
                },
              },
            },
          ]
        },
      ],
    },
    optimization: {
      minimizer: [
        // Omit creation of .txt files
        new (require('terser-webpack-plugin'))({ extractComments: false }),
      ],
    },
    devServer: {
      hot: true,
      open: true,
      static: { directory: path.join(__dirname, 'public') },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      })
    ]
  }
}
