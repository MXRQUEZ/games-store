/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require("webpack-merge");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const common = require("./webpack.common");

module.exports = (env, argv) => {
  const commonConfig = common(env, argv);

  /** @type {import('webpack').Configuration} */
  const extendedConfig = {
    mode: "production",
    devtool: argv.sourceMap != null ? "source-map" : false, // option controls how source maps are generated (affects on build speed dramatically): https://v4.webpack.js.org/configuration/devtool/
    output: {
      filename: "[name].[contenthash:8].js", // contenthash-this is version for avoding browser-cache issue: user always has to get the last version of files
      chunkFilename: "[name].[contenthash:8].js",
    },
    performance: {
      assetFilter: function assetFilter(assetFilename) {
        return !/(\.map$)|(fonts)|(images)/.test(assetFilename); // ignore these files from perfomance-hints
      },
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          // default webpack plugin for js-optimization which should be configured: https://v4.webpack.js.org/configuration/optimization/#optimizationminimizer
          // speedest alternative of UglifyJS (it improves minifying js files)
          test: /\.m?js(\?.*)?$/i,
          // exclude: /\.m?js(\?.*)?$/i, // uncomment if we don't need uglifying (for debug purpose)
          extractComments: false, // disable extracting comments to a different file
          terserOptions: {
            toplevel: true, // https://github.com/terser/terser#minify-options
            output: {
              comments: false, // remove comments from files
            },
            mangle: {
              safari10: true, // for preventing Safari 10/11 bugs in loop scoping and await
            },
            compress: { pure_funcs: ["console.info", "console.debug", "console.warn"] }, // remove this functions when their return values are not used
          },
        }),
        new OptimizeCSSAssetsPlugin({}), // it minifies css and optimize it with cssnano: https://cssnano.co/guides/optimisations
      ],
      splitChunks: {
        chunks: "async",
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: "~",
        automaticNameMaxLength: 30,
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      // optional: it creates brotli-compressed files in '[path].gz[query]'
      new CompressionPlugin({
        algorithm: "gzip",
        filename: "[path][base].gz[query]",
        threshold: common.filesThreshold, // (bytes). Only assets bigger than this size are processed
      }),
      // optional: it creates gzip-compressed files in '[path].br[query]'
      new CompressionPlugin({
        algorithm: "brotliCompress",
        filename: "[path][base].br[query]",
        threshold: common.filesThreshold, // (bytes). Only assets bigger than this size are processed
      }),
      new ESLintPlugin({
        cache: true,
      }),
      new StylelintPlugin({
        cache: true,
      }),
      new BundleAnalyzerPlugin(),
    ],
  };

  return merge(commonConfig, extendedConfig);
};
