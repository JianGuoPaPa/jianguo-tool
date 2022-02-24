const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname),
        library: {
            name: 'jianguoTool',
            type: 'umd'
        },
        // inorder to use in both browser and node
        globalObject: 'this'
    }
};
