const PetController = require('../controller/pets.controller');

module.exports = (app) => {

    app.get("/api/Pets", PetController.findAllPets);
    app.get("/api/Pet/:id", PetController.findOnePet);
    app.post("/api/Pet", PetController.createNewPet);
    app.put("/api/Pet/:id", PetController.updatePet);
    app.delete("/api/Pet/:id", PetController.deletePet);    

}