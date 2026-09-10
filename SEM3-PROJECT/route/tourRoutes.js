const express = require("express");

const router = express.Router();

const tourController = require("../controller/tourController");


// search tour
router.get("/tours/search", tourController.searchTour);

// search by  price
// search by price
router.get("/tours/price", tourController.searchbyPrice);

// get tour by id
router.get("/tours/:id", tourController.getTourById);

// get all tours
router.get("/tours", tourController.getAllTours);


// add new tour
router.post("/tours", tourController.addTour);

//Update tour
router.put('/tours/:id', tourController.updateTour);

// delete tour
router.delete("/tours/:id", tourController.deleteTour);




module.exports = router; 