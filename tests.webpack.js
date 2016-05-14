// tests.webpack.js
var context = require.context('./app/js', true, /-test\.jsx?$/);
context.keys().forEach(context);
