const passport = require('passport');
const router = require('express').Router();
const User = require('../models/User');


router.get('/Pag_login', (req, res) => {
    res.render('paginas/Pag_login', { formToShow: 'login' });
});

router.post('/Pag_login', passport.authenticate('local', {
    successRedirect: '/principal',  
    failureRedirect: '/Pag_login',
    failureFlash: true
}));

router.post('/Pag_register', async (req, res)=>{
    const { name, email, password } = req.body;
    console.log(req.body)
    const errors = [];
    if(name.length <= 0){
        errors.push({text: 'Ingrese el nombre'})
    }
    
    if(password.length < 4){
        errors.push({text: 'Contraseña mínimo de 4 caracteres'})
    }
    if(errors.length > 0){
        res.render('paginas/Pag_login', { errors, name, email, password });
    } else {
        //res.send('OK');
        const emailUser = await User.findOne({email: email});
        console.log(emailUser)
        if(emailUser){
            req.flash('error_msg', 'El correo ya está registrado');
            res.redirect('/Pag_login');
            
            
        } else {
        const newUser = new User({name, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Usuario Registrado');
        res.redirect('/Pag_login');
        }
    }
})
module.exports = router;