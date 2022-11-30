const path = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
    name: 'Portfolio',
    mode: isDevelopment ? 'development' : 'production',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'components'),
            '@layouts': path.resolve(__dirname, 'layouts'),
            '@pages': path.resolve(__dirname, 'pages'),
            '@assets': path.resolve(__dirname, 'assets'),
        },
    },

    entry: {
        app: ['./client']                  
    },

    module : {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: path.join(__dirname, 'node_modules'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: { browsers: ['last 2 chrome versions'] },
                                debug: isDevelopment,
                            },
                        ],
                        '@babel/preset-react',
                    ],
                    env: {
                    development: {
                        plugins: [['@emotion', { sourceMap: true }], require.resolve('react-refresh/babel')],
                    },
                    production: {
                        plugins: ['@emotion'],
                    },
                    },
                },
            }
            
        },
        {
            test: /\.css?$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: {
                loader: '@svgr/webpack',
                options: {
                    name: '[name].[ext]'
                },
            }
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            }
        },
        ]
    },
    plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' })],
    output: {
        path: path.join(__dirname, 'dist'), 
        filename: 'app.js',                    
        publicPath: '/dist/',
    },
    devServer: {
        devMiddleware: {
            publicPath: '/dist/'
        },
        static: {
            directory: path.resolve(__dirname)
        },
        hot: true,
    },
    
};

if (isDevelopment && config.plugins) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(new RefreshWebpackPlugin());
    config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true }));
}
  if (!isDevelopment && config.plugins) {
    config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
    config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}

module.exports = config;