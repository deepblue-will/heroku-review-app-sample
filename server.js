const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
const path = require('path');

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/sample-app' + req.path));
});
console.log('Server listening on port 8080');