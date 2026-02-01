const Category = require("../models/Category");

const VALID_CATEGORIES = [
  "Appetizers",
  "Salads",
  "Main Courses",
  "Desserts",
  "Beverages",
  "Soups",
  "Sandwiches",
  "Pizza",
  "Pasta",
  "Seafood",
  "Vegetarian",
  "Breakfast",
  "Sides",
  "Sauces"
];

// CREATE (admin)
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Category name is required" });
    }

    if (!VALID_CATEGORIES.includes(name.trim())) {
      return res.status(400).json({
        error: `Invalid category. Must be one of: ${VALID_CATEGORIES.join(", ")}`
      });
    }

    const existingCategory = await Category.findOne({ name: name.trim() });
    if (existingCategory) {
      return res.status(409).json({ error: "Category already exists" });
    }

    const category = await Category.create({
      name: name.trim(),
      description
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ (public)
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE (admin)
exports.updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (name && !VALID_CATEGORIES.includes(name.trim())) {
      return res.status(400).json({
        error: `Invalid category. Must be one of: ${VALID_CATEGORIES.join(", ")}`
      });
    }

    if (name) {
      const existingCategory = await Category.findOne({
        name: name.trim(),
        _id: { $ne: req.params.id }
      });
      if (existingCategory) {
        return res.status(409).json({ error: "Category already exists" });
      }
    }

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name: name?.trim(), description },
      { new: true, runValidators: true }
    );

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE (admin)
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ message: "Category removed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
