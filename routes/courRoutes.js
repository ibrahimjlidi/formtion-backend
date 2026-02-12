///// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { protect ,authorizeRoles} = require("../middlewares/authMiddleware");
const courController = require("../controllers/courController");
const upload = require("../middlewares/uploadMiddleware");




router.post("/ajouter", upload.single("image"), protect, authorizeRoles("admin"), courController.ajouterCour);
router.get("/lister", protect, authorizeRoles("admin"), courController.listerCours);
router.get("/:id", protect, courController.getCour);
router.put("/:id", protect, courController.modifierCour);
router.delete("/:id", protect, courController.supprimerCour); 
module.exports = router;

