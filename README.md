"build": 'rm -rf ./build && NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors'
"start": "set NODE_ENV=dev webpack-dev-server --progress --colors"