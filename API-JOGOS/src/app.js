const express = require('express'); 
const app = express();
const port = 3000;

const padraoRouter = require('./routes/padrao.route');
const usuarioRouter = require('./routes/usuario.route');
const musicasRouter = require('./routes/musicas.route');
const playlistRouter = require('./routes/forms.route');
const favoritosRouter = require('./routes/favoritos.route');
const erroRouter = require('./routes/erro.route');

try {
    app.use(express.json());
    app.use(padraoRouter);
    app.use(usuarioRouter);
    app.use(musicasRouter);
    app.use(playlistRouter);
    app.use(favoritosRouter);
    } catch (err) {
        app.use(erroRouter);
    }

app.listen(port);
console.log(`Running in http://localhost:${port}`);