const express = require('express');
const tourController = require('./../controllers/tourController')
const router = express.Router();

router.param('id', tourController.checkID)

// create a checkBody middleware
// check if body contains the name
// if not send back a 400 (Bad request)
// Add to the post handlerstack


router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour)

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)

module.exports = router;