const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();
const authController = require('./../controllers/authController');
const reviewController = require('./../controllers/reviewController');

// router.param('id', tourController.checkID)

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);

router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restictTo('admin', 'lead-guide'),
    tourController.deleteTour
  );

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews
// GET /tour/234fad4/reviews/987dfg

router
  .route('/:tourId/reviews')
  .post(
    authController.protect,
    authController.restictTo('user'),
    reviewController.createReview
  );

module.exports = router;
