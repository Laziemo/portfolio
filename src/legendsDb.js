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
