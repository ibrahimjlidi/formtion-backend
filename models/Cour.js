// models/Cour.js
const mongoose = require("mongoose");
const courSchema = new mongoose.Schema({

titre: { type: String, required: true },
description: String,
image: { type: String }, 
}, { timestamps: true });
module.exports = mongoose.model("Cour", courSchema);