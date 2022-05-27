const { Router } = require("express");
const { categoryController } = require("../controllers/categories.controller");

const router = Router();

router.get("/category/:id", categoryController.getCategory);
router.post("/category", categoryController.postCategory);
router.delete("/category/:id", categoryController.deleteCategory);
router.get("/category", categoryController.findCategory);

module.exports = router;
