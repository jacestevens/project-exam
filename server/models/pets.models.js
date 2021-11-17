const mongoose = require('mongoose');

const PetsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "We need to know the pet's name!"],
        minLength: [3, "At least 3 characters are required"]
    },

    type: {
        type: String, 
        required: [true, "We need to know furball's type"],
        minLength: [3, "You need at least 3 characters"]
    },

    petDescription: {
        type: String, 
        required: [true, "You need too describe the furball's description, if a child could do it, you can do it too"],
        minLength: [3, "You need at least 3 characters (we advise you use more than one word, come on)"]
    },

    firstSkill: {
        type: String
    },
    secondSkill: {
        type: String
    },
    thirdSkill: {
        type: String
    },
    
    like: {
        type: String,
        default: '0'
    }
   
}, {timestamps: true})

const Pets = mongoose.model("Pet", PetsSchema);

module.exports = Pets;


// pet name, pet type, and pet description are all required and must be 3 characters or longer 