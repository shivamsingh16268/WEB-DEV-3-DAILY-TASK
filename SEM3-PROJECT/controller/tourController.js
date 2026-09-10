const packages = require("../data/tour");
const tourModel = require("../models/tourModel");

// get all tours
const getAllTours = (req, res) => {

    const tours = tourModel.getAll();
    res.json(tours);

};

// get tour by id
const getTourById = (req, res) => {
    const id = parseInt(req.params.id);
    const tour = tourModel.getById(id);
    if (tour) {
        res.status(200).json(tour);
    } else {
        res.status(404).json({
            message: "Tour not found"
        });
    }
};

// add new tour
const addTour = (req, res) => {

    const newTour = req.body;

    const tour = tourModel.addTour(newTour);

    res.status(201).json(tour);

};


const deleteTour = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTours = tourModel.deleteTour(id);
    res.status(200).json({
        message: 'Tour deleted successfully',
        tours: updatedTours
    });
};


const updateTour = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTourData = req.body;
    const updateTour = tourModel.updateTour(id, updatedTourData);
    if (updateTour) {
        res.status(200).json(updateTour);
    } else {
        res.status(404).json({
            message: "Tour not found"
        });
    }
};


const searchTour = (req, res) => {
    const destination = req.query.destination;
    if (!destination) {
        return res.status(400).json({message: "Destination query parameter is required"});
    }

    const tours = tourModel.searchTour(destination);

    res.status(200).json(tours);
}; 


const searchbyPrice = (req, res) => {
    const minPrice = parseInt(req.query.minPrice);
    const maxPrice = parseInt(req.query.maxPrice);
    if (!minPrice || !maxPrice) {
        return res.status(400).json({
            message: "Minimum price and maximum price are required"
        });
    }
    const tours = tourModel.searchbyPrice(minPrice, maxPrice);
    res.status(200).json(tours);
};

module.exports = {
    getAllTours,
    getTourById,
    addTour,
    deleteTour,
    updateTour,
    searchTour,
    searchbyPrice

};  