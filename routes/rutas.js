const router = require('express').Router();

//Rutas para navegar con el localhost
router.get('/', (req, res) => {
    //res.send('Este es el Index');
    res.render('paginas/Pag_login');
});

router.get('/principal', (req, res) => {
    //res.send('Este es el Acerca');
    res.render('paginas/index_principal');
});

router.get('/lugares', (req, res) => {
    //res.send('Este es el Acerca');
    res.render('paginas/Pag_lugares');
});

router.get('/guias', (req, res) => {
    //res.send('Este es el Acerca');
    res.render('paginas/Pag_guiasT');
});

module.exports = router;