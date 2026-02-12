///// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { protect ,authorizeRoles} = require("../middlewares/authMiddleware");
const userController = require("../controllers/userController");
const upload = require("../middlewares/uploadMiddleware");



router.post("/register", upload.single("image"), userController.register);
router.post("/login", userController.login);

router.post("/ajouter", upload.single("image"), protect, authorizeRoles("admin"), userController.ajouterUtilisateur);
router.get("/lister", protect, authorizeRoles("admin"), userController.listerUtilisateurs);
router.get("/:id", protect, userController.getUtilisateur);
router.put("/:id", protect, userController.modifierUtilisateur);
router.delete("/:id", protect, userController.supprimerUtilisateur); 
module.exports = router;

