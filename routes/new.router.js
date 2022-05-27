const { Router } = require("express");
const { newsController } = require("../controllers/new.controller");

const router = Router();

router.post("/news", newsController.postNews);
router.patch("news", newsController.deleteNews);
router.patch("/news/:id", newsController.patchNews);
router.get("/news/:id", newsController.getNewsById);
router.delete("/news", newsController.getNews);

module.exports = router;
