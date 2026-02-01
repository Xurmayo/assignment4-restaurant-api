const express = require("express");
const {
  createMenuItem,
  getMenuItems,
  updateMenuItem,
  deleteMenuItem
} = require("../controllers/menuController");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", getMenuItems); // public
router.post("/", auth, admin, createMenuItem);
router.put("/:id", auth, admin, updateMenuItem);
router.delete("/:id", auth, admin, deleteMenuItem);

module.exports = router;
