var webpack = require('webpack');
 var path = require('path');
//
// var parentDir =  path.join(__dirname, './src/');
//
// module.exports = {
//     entry: [
//         path.join(parentDir, 'main.js')
//     ],
//
//     module: {
//         loaders: [{
//             test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader'
//             },{
//                 test: /\.less$/,
//                 loaders: ["style-loader", "css-loder", "less-loader"]
//             }
//         ]
//     },
//
//     output: {
//         //path: parentDir + '/dist',
//         filename: 'index.js'
//     },
//
//     devServer: {
//         contentBase: parentDir,
//         historyApiFallback: true
//     }
// }

var config = {
   entry: './src/main.js', // entry point
   output: {
         filename: 'index.js', // place where bundled app will be served
      },
   devServer: {
         inline: true, // autorefresh
         port: 8089 // development port server
      },
   module: {
         loaders: [
            {
               test: /\.(js|jsx)$/, // search for js files
               exclude: /node_modules/,
               loader: 'babel-loader',
   query: {
               presets: ['es2015', 'react'] // use es2015 and react
            }
         }
      ]
   }
}

module.exports = config;
