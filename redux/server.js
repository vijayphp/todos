var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {

    publicPath: config.output.publicPath

}).listen(3001, 'localhost', function(err){

    if( err ){

        console.log(err);
    }else {

        console.log('listening at 3001');
    }

})
