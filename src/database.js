let mongoose = require('mongoose');

const server  = '127.0.0.1:27017';
const database = 'legends';

class Database {
    constructor(){
        this._connect();
    }

    _connect(){
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(()=>{
            console.log(`Connected to ${database} database successfully!`);
        })
        .catch((err)=>{
            console.error(`Error connecting to ${legends} database!`);
        });
    }
}


module.exports = new Database();

const legendModel = require ('../models/legends');

let legend = new legendModel({
    "name": "Avatar Aang",
    "type": "Avatar/Air-bender",
    "world": "Air Nomad",
    "description":  "Aang often acts in a fun-loving, carefree manner. His pacifism and vegetarianism are primary traits of Buddhism. The creators intended Aang to \"defeat enemies with his wits\" and be a \"trickster hero\".Though Aang is often frivolous and enthusiastic, he becomes serious during a crisis."
});

// legend
//     .save()
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => {
//         console.error(err)
//     });

legendModel
    .find({
    "name": "Avatar Aang" 
    })
    .then((doc)=>{
        console.log(doc);
    })
    .catch((err)=>{
        console.error(err);
    });
