const express = require("express");
const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory
} = require("../controllers/categoryController");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", getCategories); // public
router.post("/", auth, admin, createCategory);
router.put("/:id", auth, admin, updateCategory);
router.delete("/:id", auth, admin, deleteCategory);

module.exports = router;
