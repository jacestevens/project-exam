const mongoose = require('mongoose');


const dbName = "Pets";

mongoose.connect("mongodb://127.0.0.1/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("You are connected to the database: Pets")
    })

    .catch((err) => console.log(err))

