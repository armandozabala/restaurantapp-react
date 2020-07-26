const tailwinds = require('tailwindcss');

module.exports = {
    plugins: [
        tailwinds('./tailwind.js'),
        require('autoprefixer')
    ]
}