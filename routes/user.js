const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send('Este es el Index');
    res.render('paginas/Pag_login');
});

router.get('/register', (req, res) => {
    res.send('Este es el Acerca');
    res.render('about');
});

module.exports = router;