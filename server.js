const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + '/dist/projeto-final'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/projeto-final/index.html'));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);