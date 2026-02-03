
const express = require('express');
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require('multer');

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage()
});

// POST /api/food
router.post(
  '/',
  authMiddleware.authFoodPartnerMiddleware,
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "image", maxCount: 1 }
  ]),
  foodController.createFood
);

// GET /api/food
router.get(
  '/',
  authMiddleware.authUserMiddleware,
  foodController.getAllFood
);

module.exports = router;
