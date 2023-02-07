/**
 * Module dependencies.
 */

var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});