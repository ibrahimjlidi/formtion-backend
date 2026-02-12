// controllers/userController.js
const User = require("../models/Cour");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



exports.ajouterCour = async (req, res) => {
  try {
    const { titre, description } = req.body;

    const courExiste = await User.findOne({ titre });
    if (courExiste) {
      return res.status(400).json({ message: "Titre déjà utilisé" });
    }

    const cour = await User.create({
      titre,
      description,
      image: req.file ? req.file.filename : null
    });

    res.status(201).json({
      _id: cour._id,
      titre: cour.titre,
      description: cour.description,
      image: cour.image,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





// Ajouter un utilisateur (admin uniquement)


// Récupérer tous les cours
exports.listerCours = async (req, res) => {
  try {
    const cours = await User.find();
    res.json(cours);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer un cours par ID
exports.getCour = async (req, res) => {
  try {
    const cour = await User.findById(req.params.id);
    if (!cour) return res.status(404).json({ message: "Cours non trouvé" });
    res.json(cour);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un cours (admin uniquement)
exports.modifierCour = async (req, res) => {
  try {
    const cour = await                                              
        User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!cour) return res.status(404).json({ message: "Cours non trouvé" });
    res.json(cour);
  } catch (err) {                                                                                                                               
    res.status(400).json({ message: "Erreur de mise à jour", error: err.message });
  }
};

// Supprimer un cours (admin uniquement)
exports.supprimerCour = async (req, res) => {
    try {
        const cour = await User.findByIdAndDelete(req.params.id);
        if (!cour) return res.status(404).json({ message: "Cours non trouvé" });
        res.json({ message: "Cours supprimé" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }           
};
