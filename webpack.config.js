/*
 * Copyright (c) 2021 Huy Duc Dao
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const webpack = require('webpack');

const path = require('path');

const ROOT = path.resolve(__dirname, '.');

const TEST = process.argv.indexOf('--test') > -1;

function root(args) {
  return path.join.apply(path, [ROOT].concat(args));
}

module.exports = {
  devtool: 'inline-source-map',
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules'],
  },

  entry: root('xreact-core-libraries.ts'),

  output: {
    path: root('bundles'),
    publicPath: '/',
    filename: 'xreact-core-libraries.umd.js',
    libraryTarget: 'umd',
    library: 'xreact-core-libraries',
  },

  optimization: {
    moduleIds: 'named',
  },

  // require those dependencies but don't bundle them

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(j|t)sx?$/,
        loader: 'eslint-loader',
        exclude: [root('node_modules')],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [/\.e2e\.ts$/],
      },
    ],
  },

  externals: TEST
    ? {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      }
    : {
        lodash: true,
        react: true,
        'react-addons-css-transition-group': true,
        'react-addons-transition-group': true,
        'react-dom': true,
      },
};
