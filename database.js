const user='webTrav';
//const password='WebTave';
const dbname='viajeros';

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://web:web@traveling.zyv0qq1.mongodb.net/viajeros', {
    //useCreateIndex: true,
    //useNewUrlParser: true,
    //useFindAndModify: false
    
})
    .then(db => console.log('BD conectada'))
    .catch(err => console.error(err));