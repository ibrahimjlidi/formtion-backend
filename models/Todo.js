// models/Todo.js
const mongoose = require('mongoose');

/**
 * Schéma Todo : définit la structure d'une tâche dans la base de données
 * Chaque tâche est associée à un utilisateur pour l'authentification multi-utilisateur
 */
const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Le texte de la tâche est obligatoire'],
    trim: true,
    minlength: [3, 'Le texte doit contenir au moins 3 caractères'],
    maxlength: [500, 'Le texte ne peut pas dépasser 500 caractères']
  },
  completed: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Un utilisateur doit être associé à la tâche']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware pour mettre à jour la date de modification
TodoSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index pour optimiser les recherches par utilisateur
TodoSchema.index({ user: 1, createdAt: -1 });

// Méthode pour marquer une tâche comme complétée
TodoSchema.methods.complete = function() {
  this.completed = true;
  return this.save();
};

// Méthode pour marquer une tâche comme incomplète
TodoSchema.methods.uncomplete = function() {
  this.completed = false;
  return this.save();
};

module.exports = mongoose.model('Todo', TodoSchema);
