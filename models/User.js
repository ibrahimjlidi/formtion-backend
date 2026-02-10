// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: { type: String, unique: true },
  mdp: String,
  role: { type: String, enum: ['admin', 'client', 'fournisseur'], default: 'client' },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
