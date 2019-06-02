const preset = () => ({
    plugins: [
        require('babel-plugin-transform-inline-imports-commonjs')
    ]
});

module.exports = preset;
