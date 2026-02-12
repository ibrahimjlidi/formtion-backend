// models/User.js
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

nom: { type: String, required: true },
prenom: String,
email: { type: String, unique: true },
mdp: String,
image: { type: String }, 
role: { type: String, enum: ['admin', 'client', 'fournisseur'],
default: 'admin' },
}, { timestamps: true });
module.exports = mongoose.model("User", userSchema);