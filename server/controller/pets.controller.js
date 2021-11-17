const Pets = require("../models/pets.models");

module.exports = {

    findAllPets: (req,res) => {
        Pets.find({})
            .then((allPets) => {
                res.json(allPets)
                console.log(allPets)
            })
            .catch((err) => {
                res.json({message: "Something went wrong in findAllPets", error: err})
            })
    }, 

    findOnePet: (req, res) => {

        Pets.findOne({_id: req.params.id})
            .then((onePet) => {
                console.log(onePet);
                res.json(onePet)
            })
            .catch((err) => console.log(err))
        },

    createNewPet: (req, res) => {

        Pets.create(req.body)
            .then((newPet) => {
                console.log(newPet);
                res.json(newPet)

            })
            .catch((err) => {
                console.log("Something went wrong in adding a new Pet")
                res.status(400).json(err)
            })

    },

    updatePet: (req, res) => {

        Pets.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then((updatedPet) => {
                console.log(updatedPet)
                res.json(updatedPet)
            })

            .catch((err) => {
                console.log("Something went wrong in updating this Pet")
                console.log(err)
                res.status(400).json(err)
            })

    }, 

    deletePet: (req, res) => {
        Pets.deleteOne({_id: req.params.id})
            .then((deletedPet) => {
                console.log(deletedPet)
                res.json(deletedPet)
            })
            .catch((err) => {
                console.log(err)
                console.log("Something went wrong in deleting this Pet")
            })
    }

    }
        
