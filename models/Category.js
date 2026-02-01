const mongoose = require('mongoose');

// Valid restaurant-themed categories
const VALID_CATEGORIES = [
  'Appetizers',
  'Salads',
  'Main Courses',
  'Desserts',
  'Beverages',
  'Soups',
  'Sandwiches',
  'Pizza',
  'Pasta',
  'Seafood',
  'Vegetarian',
  'Breakfast',
  'Sides',
  'Sauces'
];

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      enum: VALID_CATEGORIES,
      trim: true
    },
    description: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
