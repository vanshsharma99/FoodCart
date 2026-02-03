const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const { v4: uuidv4 } = require('uuid');


// CREATE FOOD
async function createFood(req, res) {
  try {

    const { name, description, price } = req.body;

    if (!req.files?.video || !req.files?.image) {
      return res.status(400).json({
        message: "Video and Image are required"
      });
    }

    // Upload Video
    const videoUpload = await storageService.uploadFile(
      req.files.video[0].buffer,
      uuidv4()
    );

    // Upload Image
    const imageUpload = await storageService.uploadFile(
      req.files.image[0].buffer,
      uuidv4()
    );

    const foodItem = await foodModel.create({
      name,
      description,
      price,
      video: videoUpload.url,
      image: imageUpload.url,
      foodPartner: req.foodPartner._id
    });

    res.status(201).json({
      message: "Food created successfully",
      foodItem
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error"
    });
  }
}


// GET ALL FOOD
async function getAllFood(req, res) {
  try {
    const foodItems = await foodModel
      .find()
      .populate("foodPartner", "name");

    res.status(200).json({
      message: "Food items fetched successfully",
      foodItems
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = {
  createFood,
  getAllFood
};
