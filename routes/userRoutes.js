///// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/ajouter", userController.ajouterUtilisateur);
router.get("/lister", userController.listerUtilisateurs);
router.get("/:id", userController.getUtilisateur);
router.put("/:id", userController.modifierUtilisateur);
router.delete("/:id", userController.supprimerUtilisateur); 
module.exports = router;

